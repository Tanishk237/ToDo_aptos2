import React, { useState } from 'react';

interface AddNewListProps {
  onCreateList: (listId: string) => void;
}

const AddNewList: React.FC<AddNewListProps> = ({ onCreateList }) => {
  const [listName, setListName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim()) {
      onCreateList(Math.random().toString(36).substr(2, 9));
      setListName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-new-list">
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Add new list"
      />
      <button type="submit">Create List</button>
    </form>
  );
};

export default AddNewList;