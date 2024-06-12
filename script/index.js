document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://swapi.dev/api/people';
    const characterList = document.querySelector('.character-list');
    const characterDetails = document.querySelector('.character-details');

    const fetchCharacters = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayCharacterList(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayCharacterList = (characters) => {
        characters.forEach((character, index) => {
            const characterItem = document.createElement('div');
            characterItem.classList.add('character-item');
            characterItem.textContent = character.name;
            characterItem.addEventListener('click', () => displayCharacterDetails(character, index));
            characterList.appendChild(characterItem);
        });
    };

    const displayCharacterDetails = (character, index) => {
        characterDetails.style.display = 'block';
        characterDetails.innerHTML = `
            <img src="https://via.placeholder.com/150?text=${character.name}" alt="${character.name}">
            <div><strong>Name:</strong> ${character.name}</div>
            <div><strong>Gender:</strong> ${character.gender}</div>
            <div><strong>Height:</strong> ${character.height} cm</div>
        `;
    };

    fetchCharacters();
});
