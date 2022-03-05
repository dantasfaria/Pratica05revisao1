/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
 export const uniq = <T>(args: T[]): T[] => {
  let unique = args.filter(onlyUnique);    
  
  function onlyUnique(value, index, args) {
    return args.indexOf(value) === index;
  }
  
  return unique;
  };