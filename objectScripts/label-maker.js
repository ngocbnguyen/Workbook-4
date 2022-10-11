let info = {
    name: "Ngoc",
    address: "123 Lucky St",
    city: "Atlanta",
    state: "Georgia",
    zip: "30096",
};

function printContact() {
    console.log(info.name);
    console.log(info.address);
    console.log(`${info.city}, ${info.state} ${info.zip}`);
}

printContact();