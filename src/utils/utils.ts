const formatMoney = (cents: number) => {
    return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const encodeURI = (stringUrl: string) => stringUrl.replace(/ /g, "-").toLowerCase();

export { formatMoney, encodeURI }