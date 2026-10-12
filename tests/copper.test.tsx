import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Logo } from "@/components/copper/logo";
import { SiteFooter } from "@/components/copper/site-footer";
import { SiteHeader } from "@/components/copper/site-header";

vi.mock("next-themes", () => ({ useTheme: () => ({ setTheme: vi.fn() }) }));

describe("Brand components", () => {
  it("Logo renders light and dark versions with alt text", () => {
    render(<Logo />);
    const images = screen.getAllByAltText("Copper State Labs");
    expect(images.map((img) => img.getAttribute("src")).join(" ")).toMatch(
      /logo\.png.*logo-dark\.png/,
    );
  });

  it("SiteHeader links the logo home and has a theme toggle", () => {
    render(<SiteHeader />);
    expect(
      screen.getByRole("link", { name: "Copper State Labs home" }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("button", { name: "Change theme" }),
    ).toBeInTheDocument();
  });

  it("SiteHeader links to the landing page sections", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("banner")).toHaveAttribute(
      "data-testid",
      "site-header",
    );
    for (const [name, href] of [
      ["Products", "#products"],
      ["Copper Plus", "#plus"],
      ["Privacy", "#privacy"],
    ]) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("SiteFooter shows the fictional-use label and the logo", () => {
    render(<SiteFooter />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveTextContent("Fictional — for educational use.");
    expect(footer).toHaveAttribute("data-testid", "site-footer");
    expect(screen.getByAltText("Copper State Labs")).toBeInTheDocument();
  });
});
