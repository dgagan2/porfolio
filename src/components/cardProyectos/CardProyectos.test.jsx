import { render, screen } from "@testing-library/react"
import CardProyectos from "./CardProyectos"
import "@testing-library/jest-dom"

describe("CardProyectos", () => {
    it("renderiza los títulos de los proyectos correctamente", () => {
        render(<CardProyectos />)

        expect(screen.getByText("Oura Movie")).toBeInTheDocument()
        expect(screen.getByText("ElectroDiesel")).toBeInTheDocument()
        expect(screen.getByText("E-commerce")).toBeInTheDocument()
        expect(screen.getByText("API E-commerce")).toBeInTheDocument()
    })

    it("renderiza imágenes de tecnología", () => {
        render(<CardProyectos />)

        const icons = screen.getAllByRole("img")
        expect(icons.length).toBeGreaterThan(5)
    })

    it("renderiza enlaces correctos", () => {
        render(<CardProyectos />)

        expect(screen.getByLabelText("Proyecto-Oura Movie")).toHaveAttribute("href", "https://moviesproject23.netlify.app/")
        expect(screen.getByLabelText("Proyecto-ElectroDiesel")).toHaveAttribute("href", "https://electrodieselcolombia.netlify.app/")
    })
})
