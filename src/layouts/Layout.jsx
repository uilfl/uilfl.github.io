import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { label: "About", href: "/" },
  { label: "Research", href: "/research" },
  { label: "CV", href: "/cv" },
];

function Layout({ title, activeTab, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
      </head>
      <body className="min-h-screen bg-background">
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95">
              <div className="container flex h-16 items-center justify-between">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                          href={item.href}
                          className={`${navigationMenuTriggerStyle()} ${
                            activeTab === (item.href === "/" ? "about" : item.href.replace("/", ""))
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;