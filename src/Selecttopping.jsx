export default function SelectTopping(props){
    const{name,price,addPrice,index} = props
    return (
        <div className="flex space-x-4 justify-between p-0.5 border mb-0.5  hover:bg-fuchsia-100" onChange={(e) => {addPrice([price,index],e)}}>
            <div className="flex">
                <input type='checkbox'/>
                <p>{name}</p>
            </div>
            <p>฿{price.toFixed(2)}</p>
        </div>
    )
}