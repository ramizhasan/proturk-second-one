import { useEffect, useMemo, useState } from "react";

function FormEl() {
  const genders = [
    { key: "1", value: "Erkek" },
    { key: "2", value: "Kadin" },
  ];
  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JavaScript" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];
  const levels = [
    { key: "beginner", value: "baslangic" },
    { key: "jr.developer", value: "jr.Developer" },
    { key: "sr.developer", value: "sr.Developer" },
  ];

  //--------------STATES

  const [name, setName] = useState("Tayfun");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("2");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "1. kurali kabul ediyorum", checked: false },
    { key: 2, value: "2. kurali kabul ediyorum", checked: false },
    { key: 3, value: "3. kurali kabul ediyorum", checked: true },
  ]);
  const [level, setLevel] = useState("jr.developer");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false)

  //-------------SELECTIONS-FILTERED
  const selectedGender = genders.find((g) => g.key === gender); //genders[gender-1];
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));
  const enabled = rules.every((rule) => rule.checked) && avatar ;
  const selectedLevel = levels.find(g=> g.key === level);

  //----------------------FUNCTIONS
useEffect(()=>{
  
  const fileReader = new FileReader()
  if(avatar){
    fileReader.addEventListener('load', function(){
      setImage(this.result);
    })
    fileReader.readAsDataURL(avatar)
  }
},[avatar])

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (rule.key === key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };
  const submitHandle = function() {
    const formData = new FormData();
    formData.append('avatar',avatar);
    formData.append('name',name);
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData
    }).then(r => {
      if(r.ok) console.log(r.json());
      else throw new Error('Request Failed');
    })
    .catch(e=> console.log('Error', e));
  }

  return (
    <>
      <button onClick={() => setName("Ahmet")}>Adi Degistir</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name} <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        cols={32}
        rows={5}
      ></textarea>{" "}
      <br /> {description} <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Secin</option>
        {/*  <option value="1">Erkek</option>
            <option value="2">Kadin</option> */}
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>{" "}
      <br /> <pre>{JSON.stringify(selectedGender, null, 2)}</pre> <br />
      <button onClick={() => setCategories([2, 3, 4])}>Kategorileri Sec</button>
      <select
        value={categories}
        multiple
        onChange={(e) => {
          const newCategories = [...e.target.selectedOptions].map(
            (option) => +option.value
          );
          setCategories(newCategories);
        }}
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br /> <pre>{JSON.stringify(selectedCategories, null, 2)}</pre> <br />
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kurallari kabul ediyorum.
      </label>
      <br />
      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <br />
      {levels.map((lvl, index) => (
        <label key={index}>
          <input 
            type="radio"
            value={lvl.key}
            checked={lvl.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {lvl.value}
        </label>
      ))}  <br />
      <pre>{JSON.stringify(selectedLevel)}</pre> <br />

<label htmlFor="">
   <input type="file" onChange={e=>setAvatar(e.target.files[0])}/>
</label>
<br />
        {avatar && (
          <>
            <h3>{avatar.name}</h3>
            {image&& <img src={image} />}

          </>
        )}


      <button onClick={submitHandle}  disabled={!enabled}>Devam Et</button>
    </>
  );
}

export default FormEl;
