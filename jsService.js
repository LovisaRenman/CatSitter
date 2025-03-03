const ProductArray = [{
    name: "Heldag",
    src: "/CuteKitty.jpg",
    alt: "one cute kitty",
    btnId: "btnOpenHeldagModal",
    modalTarget: "#HeldagModal",
    height: 100,
    width: 150
  },
  {
    name: "HalvDag",
    src: "/BlanketCat.jpg",
    alt: "two cute kittens",
    btnId: "btnOpenHalvdagModal",
    modalTarget: "#HalvdagModal",
    height: 150,
    width: 150
  },
  {
    name: "Tre Timmar",
    src: "/MotherlyLove.jpg",
    alt: "three cute kittens",
    btnId: "btnOpen3hModal",
    modalTarget: "#3hModal",
    height: 113,
    width: 150
  }]

function createProducts(ProductArray){
    const fragment = document.createDocumentFragment()

    ProductArray.forEach( product => {
        const container = document.createElement('div')
        container.classList.add("container", "border", "border-1", "border-white", "rounded-4", "custom")
    
        const row = document.createElement('div')
        row.classList.add("row", "align-items-center")
    
        const col1 = document.createElement('div')
        col1.classList.add("col-auto", "d-flex", "align-items-center")
    
        const img = document.createElement('img')
        img.classList.add("object-fit-sm-contain", "border", "rounded", "img");
        img.src = product.src
        img.alt = product.alt
        img.setAttribute('loading', 'lazy')
        img.width = product.width
        img.height = product.height
    
        const heading = document.createElement('h3')
        heading.classList.add("mb-0", "ms-3");
        heading.textContent = product.name
    
        col1.appendChild(img)
        col1.appendChild(heading)
    
        const col2 = document.createElement('div')
        col2.classList.add("col-auto", "ms-auto");
    
        const button = document.createElement('button')
        button.id = product.btnId
        button.type= "button"
        button.classList = "btn custom-button"
        button.setAttribute('data-bs-toggle', 'modal')
        button.setAttribute('data-bs-target', product.modalTarget)
        button.textContent = 'Lägg till'
    
        col2.appendChild(button)
    
        row.appendChild(col1)
        row.appendChild(col2)
        container.appendChild(row)

        fragment.appendChild(container)
    })

    return fragment
}
    


document.addEventListener("DOMContentLoaded", () =>{    
    var contentCol = document.getElementById("contentCol")
    
    const products = createProducts(ProductArray)
    contentCol.appendChild(products)  

    function addItem(itemName, itemPrice) {
        kost += itemPrice;
        totalKost.innerText = kost;
    
        let newItem = document.createElement("li");
        newItem.textContent = itemName;
        kundvagn.appendChild(newItem);
      }
    
      function clearList(listElement) {
        listElement.innerHTML = "";
      }
    
    let kost = 0
    let totalKost = document.getElementById("totalKost")
    let kundvagn = document.getElementById("kundvagn")
    let btnBuy = document.getElementById("btnBuy")  
    
    let btnHalvdag = document.getElementById("btnHalvdag")
    let btnHelDag = document.getElementById("btnHelDag")
    let btn3h = document.getElementById("btn3h")

    let listHeldag = document.getElementById("listHeldag")
    let listHalvdag = document.getElementById("listHalvdag")
    let list3h = document.getElementById("list3h")

    //Halvdag
    btnOpenHalvdagModal.addEventListener("click", () => {
        var btnHalvdagKlo = document.getElementById("btnHalvdagKlo")
        var btnHalvdagPromenad = document.getElementById("btnHalvdagPromenad")
        var btnHalvdagSpa = document.getElementById("btnHalvdagSpa")
        
        btnHalvdagKlo.disabled = false
        btnHalvdagPromenad.disabled = false
        btnHalvdagSpa.disabled = false
        listHalvdag.innerHTML = "";
    })
  
  btnHalvdag.addEventListener("click", () => {
    addItem("Halvdag", 500)      
  
    const listItems = listHalvdag.querySelectorAll('li');
      listItems.forEach(element => {
      let newListItem = document.createElement("li");
      newListItem.textContent = element.textContent;
      kundvagn.appendChild(newListItem);
    });
  })
  
  btnHalvdagKlo.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -KloKlippning"
    kost = kost + 100
    listHalvdag.appendChild(newListItem)
    btnHalvdagKlo.disabled = true
  })
  
  btnHalvdagSpa.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -Spa"
    kost = kost + 100
    listHalvdag.appendChild(newListItem)
    btnHalvdagSpa.disabled = true
  })
  
  btnHalvdagPromenad.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -Promenad"
    kost = kost + 150
    listHalvdag.appendChild(newListItem)
    btnHalvdagPromenad.disabled = true
  })
  
  //3h
  btnOpen3hModal.addEventListener("click", () => {        
    var btn3hKlo = document.getElementById("btn3hKlo")
    var btn3HSpa = document.getElementById("btn3HSpa")
    
    //buggfix funkar inte utan
    var myModal = new bootstrap.Modal(document.getElementById('3hModal'));
    myModal.show();

    btn3hKlo.disabled = false
    btn3HSpa.disabled = false
    list3h.innerText = "";
  })
  
  btn3hKlo.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -KloKlippning"
    kost = kost + 100
    list3h.appendChild(newListItem)
    btn3hKlo.disabled = true
  })
  
  
  btn3HSpa.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -Spa"
    kost = kost + 100
    list3h.appendChild(newListItem)
    btn3HSpa.disabled = true
  })
  
  btn3h.addEventListener("click", () => {
    addItem("Tre timmar", 250)
  
    const listItems = list3h.querySelectorAll('li');
      listItems.forEach(element => {
      let newListItem = document.createElement("li");
      newListItem.textContent = element.textContent;
      kundvagn.appendChild(newListItem);
    });
  })
  
    //Heldag
    btnOpenHeldagModal.addEventListener("click", () => {        
        var btnHeldagKlo = document.getElementById("btnHeldagKlo")
        var btnHeldagPromenad = document.getElementById("btnHeldagPromenad")
        var btnHeldagSpa = document.getElementById("btnHeldagSpa")
        
        btnHeldagKlo.disabled = false
        btnHeldagPromenad.disabled = false
        btnHeldagSpa.disabled = false
        listHeldag.innerText = "";
    })
  
  btnHelDag.addEventListener("click", () => {
    addItem("Heldag", 750)       
  
    const listItems = listHeldag.querySelectorAll('li');
      listItems.forEach(element => {
      let newListItem = document.createElement("li");
      newListItem.textContent = element.textContent;
      kundvagn.appendChild(newListItem);
    });
  })
  
  btnHeldagKlo.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -KloKlippning"
    kost = kost + 100
    listHeldag.appendChild(newListItem)
    btnHeldagKlo.disabled = true
  })
  
  btnHeldagSpa.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -Spa"
    kost = kost + 100
    listHeldag.appendChild(newListItem)
    btnHeldagSpa.disabled = true
  })
  
  btnHeldagPromenad.addEventListener("click", () => {
    let newListItem = document.createElement("li")
    newListItem.innerText = " -Promenad"
    kost = kost + 150
    listHeldag.appendChild(newListItem)
    btnHeldagPromenad.disabled = true
  })
  
  btnBuy.addEventListener("click", () => {
    kost = 0;
    totalKost.innerText = kost
    kundvagn.innerHTML = "";
  })
})





