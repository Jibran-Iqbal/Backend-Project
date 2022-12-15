import mongoose from "mongoose";
import Res from "../models/restraunt.js";
import latlng from "latitude-longitude";

const resf= (e,i)=>{
    return {
        Name:e.Name,
        Description:e.Description,
        Location:{
            Latitude:e.Latitude,
            Longitude:e.Longitude
        },
        AverageRating:e.AverageRating,
        NumberOfRatings:e.NumberOfRatings
    }
}

export const getRests = async(req,res)=>{

    const {Latitude, Longitude, Radius} = req.body
    

    try{
        const rests = await Res.find();

        let result=rests.filter((r)=>{
            return latlng.getDistance([Latitude, Longitude],[r.Latitude,r.Longitude])<=(Radius*0.001)
        })

        result.forEach((e,i)=>{
            result[i]={
                Name:e.Name,
                Description:e.Description,
                Location:{
                    Latitude:e.Latitude,
                    Longitude:e.Longitude
                },
                AverageRating:e.AverageRating,
                NumberOfRatings:e.NumberOfRatings
            }
        })

        res.status(200).json(result);
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}