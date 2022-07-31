import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {updateProduct} from '../products/ProductsSlice'
// import {editProduct} from '../../app/helper/index'

const useStyles = makeStyles({
	main:{
		display:"flex",
		justifyContent:"center",
		width:"100%",
		marginTop:"100px"
	},
  root: {
    width: "400px",
    display:"flex",
    flexDirection:"column"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  signupButton:{
  	color:"white",
    marginTop: "20px",
    marginRight: "30px"
  },
  textField:{
  	marginRight:"30px"
  }
});

export default function EditProduct({match}) {
  const {productId} = match.params

  const product = useSelector(state=>
  					state.products.products.find(product=>product._id === productId)
  					)

  const classes = useStyles();
  const dispatch = useDispatch()

  const [productName,setProductName] = useState(product.name)
  const [productColor,setProductColor] = useState(product.color)
  const [productRam,setProductRam] = useState(product.ram)
  const [productRom,setProductRom] = useState(product.rom)
  const [productPrice,setProductPrice] = useState(product.price)
  const [productDisplaySize,setProductDisplaySize] = useState(product.displaySize)
  const [productFrontCamera,setProductFrontCamera] = useState(product.frontCamera)
  const [productRearCamera,setProductRearCamera] = useState(product.rearCamera)
  const [productBattery,setProductBattery] = useState(product.battery)
  const [productProcessor,setProductProcessor] = useState(product.processor)
  const [productImageUrl,setProductImageUrl] = useState(product.imageUrl)
  const [productModelNumber,setProductModelNumber] = useState(product.modelNumber)
  const [productModelName,setProductModelName] = useState(product.modelName)
  const [productOperatingSystem,setProductOperatingSystem] = useState(product.operatingSystem)
  const [productWarrenty,setProductWarrenty] = useState(product.warrenty)
  const [productAddDate,setProductAddDate] = useState(product.addProduct)
  const [productQty,setProductQty] = useState(product.qty)


  const handleProductNameChanged = (e)=>setProductName(e.target.value)
  const handleProductColorChanged = (e)=>setProductColor(e.target.value)
  const handleProductRamChanged = (e)=>setProductRam(e.target.value)
  const handleProductRomChanged = (e)=>setProductRom(e.target.value)
  const handleProductPriceChanged = (e)=>setProductPrice(e.target.value)
  const handleProductDisplaySizeChanged = (e)=>setProductDisplaySize(e.target.value)
  const handleProductFrontCameraChanged = (e)=>setProductFrontCamera(e.target.value)
  const handleProductRearCameraChanged = (e)=>setProductRearCamera(e.target.value)
  const handleProductBatteryChanged = (e)=>setProductBattery(e.target.value)
  const handleProductProcessorChanged = (e)=>setProductProcessor(e.target.value)
  const handleProductImageUrlChanged = (e)=>setProductImageUrl(e.target.value)
  const handleProductModelNumberChanged = (e)=>setProductModelNumber(e.target.value)
  const handleProductModelNameChanged = (e)=>setProductModelName(e.target.value)
  const handleProductOperatingSystemChanged = (e)=>setProductOperatingSystem(e.target.value)
  const handleProductWarrentyChanged = (e)=>setProductWarrenty(e.target.value)
  const handleProductAddDateChanged = (e)=>setProductAddDate(e.target.value)
  const handleProductQtyChanged = (e)=>setProductQty(e.target.value) 


  const handleSubmit=(e)=>{
  	e.preventDefault()
  	// console.log(productAddDate)
  	// const product={
  	// 	name:productName,
  	// 	color:productColor,
  	// 	ram:productRam,
  	// 	rom:productRom,
  	// 	price:productPrice,
  	// 	displaySize:productDisplaySize,
  	// 	frontCamera:productFrontCamera,
  	// 	rearCamera:productRearCamera,
  	// 	battery:productBattery,
  	// 	processor:productProcessor,
  	// 	imageUrl:productImageUrl,
  	// 	modelName:productModelName,
  	// 	modelNumber:productModelNumber,
  	// 	warrenty:productWarrenty,
  	// 	operatingSystem:productOperatingSystem,
  	// 	qty:productQty,
  	// 	addDate:productAddDate
  	// }

  	// console.log("Product ::",product)
  	dispatch(updateProduct({
  				_id:productId,
				name:productName,
		  		color:productColor,
		  		ram:productRam,
		  		rom:productRom,
		  		price:productPrice,
		  		displaySize:productDisplaySize,
		  		frontCamera:productFrontCamera,
		  		rearCamera:productRearCamera,
		  		battery:productBattery,
		  		processor:productProcessor,
		  		imageUrl:productImageUrl,
		  		modelName:productModelName,
		  		modelNumber:productModelNumber,
		  		warrenty:productWarrenty,
		  		operatingSystem:productOperatingSystem,
		  		qty:productQty,
		  		addDate:productAddDate
				}))
  	
	setProductName("")
  	setProductColor("")
  	setProductRam("")
  	setProductRom("")
  	setProductPrice("")
  	setProductDisplaySize("")
  	setProductFrontCamera("")
  	setProductRearCamera("")
  	setProductBattery("")
  	setProductProcessor("")
  	setProductImageUrl("")
  	setProductModelName("")
  	setProductModelNumber("")
  	setProductWarrenty("")
  	setProductOperatingSystem("")
  	setProductQty(0)
  	setProductAddDate("")
  
  	

  }
 

  return (
  <div className={classes.main}>
    <Card className={classes.root}>
      <CardContent>
        <h3> EditProduct Page</h3>
        
        <Button style={{ backgroundColor: '#1976d2' }} variant="contained" >
         <Link to="/admin" style={{textDecoration:"none",outline:"none",color:"white"}}>
         Admin Dashboard
      </Link>
      </Button>
        <form className={classes.root}  autoComplete="off" onSubmit={handleSubmit}>
		   <TextField 
			   id="outlined-basic" 
			   label="ProductName"  
			   className={classes.textField} 
			   required={true}  
			   value={productName}
			   onChange={handleProductNameChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="ProductColor"  
			   className={classes.textField} 
			   required={true} 
			   value={productColor}
			   onChange={handleProductColorChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="RAM"  
			   className={classes.textField} 
			   required={true} 
			   value={productRam}
			   onChange={handleProductRamChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="ROM"  
			   className={classes.textField} 
			   required={true} 
			   value={productRom}
			   onChange={handleProductRomChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="Price"  
			   className={classes.textField} 
			   required={true} 
			   value={productPrice}
			   onChange={handleProductPriceChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="DisplaySize"  
			   className={classes.textField} 
			   required={true} 
			   value={productDisplaySize}
			   onChange={handleProductDisplaySizeChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="FrontCamera"  
			   className={classes.textField} 
			   required={true} 
			   value={productFrontCamera}
			   onChange={handleProductFrontCameraChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="RearCamera"  
			   className={classes.textField} 
			   required={true} 
			   value={productRearCamera}
			   onChange={handleProductRearCameraChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="Battery"  
			   className={classes.textField} 
			   required={true} 
			   value={productBattery}
			   onChange={handleProductBatteryChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="Processor"  
			   className={classes.textField} 
			   required={true} 
			   value={productProcessor}
			   onChange={handleProductProcessorChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="ImageUrl"  
			   className={classes.textField} 
			   required={true} 
			   value={productImageUrl}
			   onChange={handleProductImageUrlChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="ModelNumber"  
			   className={classes.textField} 
			   required={true} 
			   value={productModelNumber}
			   onChange={handleProductModelNumberChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="ModelName"  
			   className={classes.textField} 
			   required={true} 
			   value={productModelName}
			   onChange={handleProductModelNameChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="OperatingSystem"  
			   className={classes.textField} 
			   required={true} 
			   value={productOperatingSystem}
			   onChange={handleProductOperatingSystemChanged}
		   />
		   <TextField 
			   id="standard-basic" 
			   label="Warrenty"  
			   className={classes.textField} 
			   required={true} 
			   value={productWarrenty}
			   onChange={handleProductWarrentyChanged}
		   />
		   <TextField 
			   id="standard-basic"   
			   className={classes.textField} 
			   required={true} 
			   type="date" 
			   value={productAddDate}
			   onChange={handleProductAddDateChanged}
		   />

		   <TextField
			   id="standard-basic" 
			   label="qty"
			   className={classes.textField}
			   type="number"
			   InputProps={{ inputProps: { min: 0} }}
			   required={true}
			   value={productQty}
			   onChange={handleProductQtyChanged}
		   />

		   <Button style={{ backgroundColor: '#1976d2' }} size="small" className={classes.signupButton} type="submit">Update</Button>
	    </form>
      </CardContent>
      

    </Card>
    </div>
  );
}