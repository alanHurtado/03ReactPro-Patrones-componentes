import { ProducCard as ProducCardHOC} from './ProducCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductBottons } from './ProductBottons';
import { ProducCardHOCProps } from '../interfaces/interfaces';
// export { ProducCard } from './ProducCard';
export { ProductBottons } from './ProductBottons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


export const ProducCard: ProducCardHOCProps = Object.assign(ProducCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Bottons: ProductBottons,
})

// export default ProducCard;