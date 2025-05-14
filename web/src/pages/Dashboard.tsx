import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { RefundItem, RefundItemProps } from "../components/RefundItem";

import { api } from "../services/api";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

import SearchSvg from "../assets/search.svg";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Cristiano",
  description: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

const PER_PAGE = 5;

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPages, setTotalOfPages] = useState(0);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`
      );
  
      console.log(response.data);
    } catch (error) {
      console.log(error);

      if(error instanceof AxiosError) {
        alert(error.response?.data.message);
      }

      alert("Não foi possível carregar as solicitações");
    }
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPages) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  };

  useEffect(() => {
    fetchRefunds();
  },[page]);

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">
        Solicitações
      </h1>

      <form 
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button variant="icon" type="submit">
          <img src={SearchSvg} alt="Ícone de Pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem
            key={item.id}
            data={item}
            href={`/refund/${item.id}`}
          />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPages}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  )
}