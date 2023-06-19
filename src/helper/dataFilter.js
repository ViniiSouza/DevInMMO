export const filtrarListaPorTermoDeBusca = (lista, termo) => {
  return lista.filter((item) => {
    return new RegExp(termo, 'ig').test(item.title);
  });
};

export const filtrarListaPorPagina = (lista, pagina) => {
  const QTD_ITENS = 20;
  if (lista != null)
    return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS);
  return null
};