import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";
import { ArrowButton, PaginacaoContainer, SpanText } from "./Paginacao.styles";

export const Paginacao = ({ typeList }) => {
    const { pagina, setPagina, games, jogosFiltrados, news, noticiasFiltradas, termoBusca } = useMMOGames();

    var qtdMaximaPaginas = typeList === 'games' ?
        (termoBusca !== '' ? Math.ceil(jogosFiltrados.length / 20) : Math.ceil(games.current.length / 20))
        : (termoBusca !== '' ? Math.ceil(noticiasFiltradas.length / 20) : Math.ceil(news.current.length / 20));

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <PaginacaoContainer>
            <ArrowButton onClick={handlePagAnterior}>
                {`<`}
            </ArrowButton>
            <SpanText>
                Página {pagina} de {qtdMaximaPaginas}
            </SpanText>
            <ArrowButton onClick={handleProxPagina}>
                {`>`}
            </ArrowButton>
        </PaginacaoContainer>
    )

}