import axios from "axios";
import { product, products } from ".";


export const getProducts=async(limit?:number,skip?:number,)=>{

	var url = `${process.env.NEXT_PUBLIC_API}/products`;
	var queryParams = [];
  
	if (skip !== undefined) {
	  queryParams.push(`skip=${skip}`);
	}
  
	if (limit !== undefined) {
	  queryParams.push(`limit=${limit}`);
	}
  
	if (queryParams.length > 0) {
	  url += `?${queryParams.join('&')}`;
	}
  
	const res = await axios.get(url);
	return res.data;

	
}
export const getProduct=async(id:number)=>{
	const res=await axios.get(
		`${process.env.NEXT_PUBLIC_API}/products/${id}`
	);
	return res.data;
}

export const updateProduct=async(id:number,payload:product)=>{
	const res=await axios.put(
		`${process.env.NEXT_PUBLIC_API}/products/${id}`
	);
	return res.data;
}