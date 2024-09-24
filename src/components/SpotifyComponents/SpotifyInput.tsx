import { useState } from "react";

interface SpotifyInputProps {
  placeholder: string;
  callParent: (uri: string) => any;
}

function SpotifyInput({ placeholder, callParent }: SpotifyInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  function handleKeyDownEvent(event: any) {
    if (event.key === "Enter") {
      callParent(inputValue);
    }
  }

  return (
    <>
      <div className="input-group mb-1  shadow">
        <span className="input-group-text" id="input_icon" data-bs-theme="dark">
          Spotify Playlist URI:
        </span>
        <input
          type="text"
          className="form-control "
          placeholder={placeholder}
          data-bs-theme="dark"
          onKeyDown={handleKeyDownEvent}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default SpotifyInput;
