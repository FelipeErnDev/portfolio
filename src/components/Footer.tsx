export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Felipe Ern. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Feito com React, TypeScript e Tailwind CSS
        </p>
      </div>
    </footer>
  );
}