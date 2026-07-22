import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background text-center px-4">
      <div className="text-primary font-serif font-bold text-8xl mb-4">404</div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold px-8">
  <Link href="/">
    Return Home
  </Link>
</Button>
    </div>
  );
}
