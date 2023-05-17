// const searchKey = decodeURI(location.pathname.split('/').pop());

// getProducts(searchKey).then(data => createProductCards(data, searchKey, '.search-listing'))


const searchKey = decodeURI(location.pathname.split('/').pop());

getProducts(searchKey).then(data => createProductCards(data, searchKey, '.search-listing'))