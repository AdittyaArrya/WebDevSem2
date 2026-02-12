// const form = document.querySelector('#eventForm');
// const list = document.querySelector('#eventList');

// form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const title=eventTitle.value
//     const date=eventDate.value
//     const category=eventcategory.value
//     const description=eventDescription.value
//     console.log(title, date, category, description)
//     const card=document.createElement("div")
//     card.innerHTML=`
//     <div>
//         <h2>${title}</h2>
//         <p>${date}</p>
//         <button>${category}</button>
//         <p>${description}</p>
//     </div>
//     `

//     eventcard.appendChild(card)
// });

// document.addEventListener('keydown', (event)=>{
//     console.log(event.key)
// })

// --- 1. Grab elements from HTML ---
const eventForm = document.getElementById('eventForm');
const eventsList = document.getElementById('eventsList');
const clearBtn = document.getElementById('clearEvents');
const sampleBtn = document.getElementById('addSampleEvents');
const keyDisplay = document.getElementById('keyPressed');

// --- 2. Function to create an Event Card ---
function addEventToDashboard(title, date, category, desc) {
    // Create a new <li> element
    const li = document.createElement('li');
    li.className = 'event-item';
    
    // Fill it with HTML content
    li.innerHTML = `
        <button class="delete-btn" title="Delete Event"></button>
        <h3>${title}</h3>
        <p style="font-size: 0.85rem; color: #666;">📅 ${date}</p>
        <span class="category-tag">${category}</span>
        <p style="margin-top: 10px; font-size: 0.95rem;">${desc || "No description provided."}</p>
    `;

    // Add Delete Functionality to the "X" button
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove(); // Removes the card from the DOM tree
    });

    // Append (add) the new card to our list
    eventsList.appendChild(li);
}

// --- 3. Handle Button Clicks ---

// Handle "Add Event" Form
eventForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page from refreshing
    
    addEventToDashboard(
        document.getElementById('eventName').value,
        document.getElementById('eventDate').value,
        document.getElementById('eventCategory').value,
        document.getElementById('eventDescription').value
    );
    
    eventForm.reset(); // Clear form inputs
});

// Handle "Clear All"
clearBtn.addEventListener('click', () => {
    eventsList.innerHTML = '';
});

// Handle "Add Sample Events"
sampleBtn.addEventListener('click', () => {
    addEventToDashboard('Web Dev', '2026-01-14', 'Social', 'lorem');
    addEventToDashboard('Tech Workshop', '2026-03-22', 'Workshop', 'Learning JavaScript DOM manipulation.');
});

// --- 4. Real-Time Keyboard Tracker ---
window.addEventListener('keydown', (e) => {
    keyDisplay.textContent = e.key === " " ? "Space" : e.key;
});

// --- 5. DOM Manipulation Demo ---
const originalText = "<strong>Bold Text</strong>    with spaces";

// innerHTML renders the bold tag
document.getElementById('demo-html').innerHTML = `<strong>innerHTML:</strong> Renders HTML tags → ${originalText}`;

// innerText simplifies spaces for the user
document.getElementById('demo-text').innerText = `innerText: Removes HTML, collapses spaces → Bold Text with spaces`;

// textContent is literal (includes original spacing)
document.getElementById('demo-content').textContent = `textContent: Removes HTML, keeps spaces → Bold Text    with spaces`;
