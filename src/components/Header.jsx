//dependecy imports
import React, {useEffect, useState, useRef} from "react";

//component imports
import RadioButton from "./RadioButton";

function usePrevious(value) {
  const ref = useRef('')
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


function Header() {
  const [theme, setTheme] = useState('dark');
  const prevTheme = usePrevious(theme)

  const radioChangeHandler = (event) => {
    setTheme(event.target.value)
	}

  const saveLocalTodos = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", JSON.stringify());
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("theme"));
      setTheme(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    if(prevTheme === '') {
      document.body.classList.add(theme);
    }

    if(prevTheme !== '' && prevTheme !== theme) {
      document.body.classList.add(theme);
      document.body.classList.remove(prevTheme);
      saveLocalTodos();
    }
  }, [theme]);
  

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">calc</h1>
          <div className="header__switchContainer">
            <span className="header__text">Theme</span>
            <div className="header__switch">
              <div className="header__themeLabel">
                <span className="header__label">1</span>
                <span className="header__label">2</span>
                <span className="header__label">3</span>
              </div>
              <div className="header__themeToggle">
                <RadioButton 
                  onChange={radioChangeHandler} 
                  id="dark-theme" 
                  checked={theme==='dark'}
                  label="dark-theme" 
                  value="dark" 
                  className="radioInput"
                />
                <RadioButton 
                  onChange={radioChangeHandler} 
                  id="light-theme" 
                  checked={theme==='light'}
                  label="light-theme" 
                  value="light"
                  className="radioInput" 
                />
                <RadioButton 
                  onChange={radioChangeHandler} 
                  id="neon-theme" 
                  checked={theme==='neon'}
                  label="neon-theme" 
                  value="neon"
                  className="radioInput" 
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
