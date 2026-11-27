(() => {
    const photo = document.querySelector("[data-product-photo]");
    if (!photo) return;

    const slug = new URLSearchParams(location.search).get("item");
    if (!Object.hasOwn(singleProducts, slug)) return;

    const product = singleProducts[slug];
    const image = photo.querySelector("img");
    if (product.photo) {
        const [left, top, width, height] = product.photo;
        photo.classList.add("single-product-photo");
        photo.style.aspectRatio = `${width} / ${height}`;
        image.style.left = `${-left / width * 100}%`;
        image.style.top = `${-top / height * 100}%`;
        image.style.width = `${1720 / width * 100}%`;
    }
    image.src = product.image ?? `../Images/Single/${encodeURIComponent(product.reference)}`;
    image.alt = product.imageAlt ?? product.title.split(" – ")[0];

    document.title = `${product.title} | Pasticcio`;
    document.getElementById("product-title").textContent = product.title;
    document.querySelector(".single-carbonara__price").textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price);

    const details = document.querySelector("[data-product-details]");
    if (typeof product.details === "string") {
        details.textContent = product.details;
    } else {
        const list = document.createElement("dl");
        list.className = "single-product-facts";
        Object.entries(product.details).forEach(([label, value]) => {
            const fact = document.createElement("div");
            const term = document.createElement("dt");
            const definition = document.createElement("dd");
            term.textContent = label;
            definition.textContent = value;
            fact.append(term, definition);
            list.append(fact);
        });
        details.append(list);
    }

    const description = document.querySelector(".single-carbonara__description");
    product.description.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        description.append(paragraph);
    });

    if (product.quantity === false) {
        document.querySelector(".single-carbonara__counter").remove();
    }
    document.querySelector("[data-product-media]").hidden = false;
    document.querySelector("[data-product-content]").hidden = false;
})();

(function () {
  document.querySelectorAll('.single-carbonara').forEach(function (root) {
    var amount = 0;
    var output = root.querySelector('[data-quantity-value]');
    if (!output) return;
    root.querySelector('[data-quantity-minus]').addEventListener('click', function () { amount = Math.max(0, amount - 1); output.textContent = amount; });
    root.querySelector('[data-quantity-plus]').addEventListener('click', function () { amount += 1; output.textContent = amount; });
  });
})();
