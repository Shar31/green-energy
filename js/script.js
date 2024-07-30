document.addEventListener("DOMContentLoaded", () => {
    // Preloader function to preload images
    function preloader() {
        const imagesList = [
            "./img/government-subsidies.jpg",
            "./img/community-solar.jpg",
            "./img/energy-efficiency.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);

    }
    window.addEventListener("load", preloader);

    // Content for each solution
    const content = {
        solution1: {
            headingContent: "Government Subsidies for Green Energy",
            bodyText: "Government subsidies can play a significant role in reducing the cost of green energy. By providing financial assistance to individuals and businesses that adopt renewable energy sources, such as solar panels or wind turbines, governments can make these technologies more accessible. This support can come in the form of tax credits, grants, or reduced interest loans.",
            imgUrl: "img/windmil.jpg",
            imgAlt: "Government Subsidies"
        },
        solution2: {
            headingContent: "Community Solar Programs",
            bodyText: "Community solar programs allow individuals to invest in solar energy without having to install solar panels on their own property. Instead, participants buy a share of a larger solar farm and receive credits on their electricity bill. This model reduces the upfront costs and makes solar energy accessible to those who may not have suitable roofs or financial resources.",
            imgUrl: "img/solar.jpg",
            imgAlt: "Community Solar"
        },
        solution3: {
            headingContent: "Energy Efficiency Improvements",
            bodyText: "Improving energy efficiency in homes and businesses can lower overall energy costs. Simple measures such as upgrading insulation, installing energy-efficient windows, or using LED lighting can significantly reduce energy consumption. These improvements often come with rebates or incentives, making them a cost-effective way to decrease energy expenses and contribute to a greener environment.",
            imgUrl: "img/light.jpg",
            imgAlt: "Energy Efficiency"
        }
    };

    // Select buttons and content container
    const buttons = document.querySelectorAll("button");
    const contentContainer = document.getElementById("content");

    // Add click event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove "active-button" ID from the previously active button
            document.getElementById("active-button").removeAttribute("id");
            // Set "active-button" ID to the clicked button
            button.setAttribute("id", "active-button");

            // Determine which content to display based on button index
            const contentKey = `solution${index + 1}`;

            contentContainer.innerHTML = `
                <h1>${content[contentKey].headingContent}</h1>
                <img src="${content[contentKey].imgUrl}" alt="${content[contentKey].imgAlt}">
                <p>${content[contentKey].bodyText}</p>
            `;
        });
    });

    // Initialize the page with the first content
    document.querySelector("button").click();  // Simulates a click on the first button
});
