import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <Button type="submit">Entrar</Button>
    </form>
  )
}