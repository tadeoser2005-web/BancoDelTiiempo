import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import FavoritesScreen from "../screens/FavoritesScreen";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FavoritesScreen">
                <FavoritesScreen/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews