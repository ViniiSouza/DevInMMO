import { useMMOGames } from "../../contexts/MMOGames/useMMOGames";

export const Paginacao = ({ typeList }) => {
    const { pagina, setPagina, games, news } = useMMOGames();
    var styles = {};
    var qtdMaximaPaginas = typeList === 'games' ? Math.ceil(games.current.length / 40) : Math.ceil(news.current.length / 40);

    const handlePagAnterior = async () => {
        setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
    };

    const handleProxPagina = () => {
        setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.pageButton} onClick={handlePagAnterior}>
                {`<`}
            </button>
            <span>
                Página {pagina} de {qtdMaximaPaginas}
            </span>
            <button className={styles.pageButton} onClick={handleProxPagina}>
                {`>`}
            </button>
        </div>
    )

}