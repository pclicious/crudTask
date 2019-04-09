export class Product{
    constructor(
        public Name : String,
        public pricingTier : String,
        public priceRange : String,
        public weight : String,
        public availability : String,
        public productUrl : String,
        public budget : String,
		public premier: String,
		public isEditable: boolean
    ){}
}