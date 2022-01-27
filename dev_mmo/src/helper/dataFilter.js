export const filtrarListaPorTermoDeBusca = (lista, termo) => {
    return lista.filter((item) => {
      return new RegExp(termo, 'ig').test(item.title);
    });
  };