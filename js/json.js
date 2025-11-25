/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

/* STEP 3a: Create the asynchronous function populate() */
async function populate() {
    // STEP 4: Store the URL of a JSON file in a variable
    const url = './js/i-scream.json'; // Assuming the JSON file is in the "js" folder

    // STEP 5: Use the new URL to create a new request object
    try {
        // STEP 6: Make a network request with the fetch() function, which returns a Response object
        const response = await fetch(url);

        // STEP 7: Capture the returned Response object and convert to a JSON object using json()
        const jsonObj = await response.json();

        // STEP 8: Output the iScream JSON object to the console
        console.log(jsonObj);

        // STEP 9a: Invoke the populateHeader function here, then build it below
        populateHeader(jsonObj);

        // STEP 10a: Invoke the showTopFlavors function here, then build it below
        showTopFlavors(jsonObj);
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    const h1 = document.createElement('h1');

    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonObj.companyName;

    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    topFlavors.forEach(flavor => {
        // STEP 10e: Build HTML elements for the content
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        const img = document.createElement('img');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = `${flavor.name} - ${flavor.type}`;
        img.src = `images/${flavor.image}`;  // Assuming the images are in the "images" folder

        // STEP 10g: Build a loop for the ingredients array in the JSON
        flavor.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    });
}

/* STEP 3b: Call the populate() function */
populate();
