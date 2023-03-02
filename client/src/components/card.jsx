export default function Card() {
  return (
    <div className="shadow-lg w-[154px] h-[250px] rounded-[15px] border">
      <img src="images/produk.png" className="w-[154px] h-[147px] rounded-[15px] bg-gray-200"/>
      <div className="pt-[10px] px-[10px] font-normal text-[14px]">Item Name</div>
      <span className="pl-[10px] text-[#5D5FEF] font-normal text-[9px]">Rp</span>
      <span className="font-normal text-[20px]">000,000,000</span>
    <div className="shadow-md hover:shadow-xl mx-[10px] py-[3px] my-[5px] w-[132px] h-[24px] rounded-[3px] bg-[#5D5FEF] text-white text-center text-[12px]">Add to Cart</div>
    </div>
  );
}
