import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Enviado!");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        value={email}
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  )
}