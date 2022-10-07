
// necesito el context
const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext)


  const onSubmit = (data) => {
    console.log(data);
    const paletteNew = {
      id: colorPalettes.length + 1,
      name: data.paletteName,
      colors: [data.color1, data.color2, data.color3, data.color4],
      liked: false,
      tags: [data.tag]
    }

    //hacer asi para que se cargue al final de la lista la tarjeta de clima
    setColorPalettes([...colorPalettes, paletteNew])
    navigate('/')
  }