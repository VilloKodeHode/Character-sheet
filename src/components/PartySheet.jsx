import { useSelector, useDispatch } from "react-redux";
import { deleteCharacter, updateCharacter } from "../redux/characterSlice";

export const PartySheet = () => {
  const characters = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const handleCharacterDelete = (id) => {
    dispatch(deleteCharacter(id));
  };

  const handleUpdate = (id, newName) => {
    dispatch(updateCharacter({ id: id, name: newName }));
  };

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <div><strong>{character.name}</strong></div>
            <div><strong>{character.health}</strong></div>
            <ul>
                <li>STR: {character.abilities.strength}</li>
                <li>AGI: {character.abilities.dexterity}</li>
                <li>CON: {character.abilities.constitution}</li>
                <li>INT: {character.abilities.intelligence}</li>
                <li>WIS: {character.abilities.wisdom}</li>
                <li>CHA: {character.abilities.charisma}</li>
              </ul>
            <input
              type="text"
              value={character.name}
              onChange={(e) => handleUpdate(character.id, e.target.value)}
            />
            <button onClick={() => handleCharacterDelete(character.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
