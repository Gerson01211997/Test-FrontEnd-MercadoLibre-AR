let DECIMALS_PRICE = 0;

export const handleFormatPrice = ({price, format}) =>{
    let dataFormat = {
      currency: 'ARS',
      maximumFractionDigits: DECIMALS_PRICE,
      minimumFractionDigits: 0,
    };
    format && (dataFormat["style"] = "currency");
    const formatNumber = Intl.NumberFormat('es-AR', {
      ...dataFormat,
    }).format(Number(price));
    // console.log({ formatNumber, domain, price });
    return formatNumber;

}