import { MainTitle, PropertyDescription, PropertyTitle, RequirementsContainer } from "./GameRequirements.styles"

export const GameRequirements = ({ requirements }) => {

    return (
        <RequirementsContainer>
            <MainTitle>Requisitos do sistema:</MainTitle>
            <PropertyTitle>Sistema operacional: <PropertyDescription>{requirements?.os}</PropertyDescription></PropertyTitle>
            <br />
            <PropertyTitle>Processador: <PropertyDescription>{requirements?.processor}</PropertyDescription></PropertyTitle>
            <br />
            <PropertyTitle>Memória: <PropertyDescription>{requirements?.memory}</PropertyDescription></PropertyTitle>
            <br />
            <PropertyTitle>Placa gráfica: <PropertyDescription>{requirements?.graphics}</PropertyDescription></PropertyTitle>
            <br />
            <PropertyTitle>Armazenamento: <PropertyDescription>{requirements?.storage}</PropertyDescription></PropertyTitle>
        </RequirementsContainer>
    )
}