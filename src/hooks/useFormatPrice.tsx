const useFormatPrice = (price: number): string => {
  return new Intl.NumberFormat("ro-MD", {
    style: "currency",
    currency: "MDL",
  }).format(price);
};

export default useFormatPrice;
