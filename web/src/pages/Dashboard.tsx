import React, { useState } from "react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

import SearchSvg from "../assets/search.svg";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Cristiano",
  description: "Transporte",
  amount: "34,50",
  categoryImg: CATEGORIES["transport"].icon,
}

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

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

      <div>
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  )
}