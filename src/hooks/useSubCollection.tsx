import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks';
import {  DocumentData, Query, Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Channels } from '@mui/material/styles/createPalette';
interface Messages {
    timestamp:Timestamp;
    message:string;
    user:{
        uid:string,
        photo:string,
        email:string,
        displayName:string;
    };
}

function useSubCollection(CollectionName:string,subCollectionName:string) {
    const channelId = useAppSelector((state) => state.channel.channelId);
    const [subDocuments,setSubDocuments] = useState<Messages[]>([]);

    useEffect(() => {
        let collectionRef = collection(db,CollectionName,String(channelId),subCollectionName);
        const collectionRefOrderBy = query(collectionRef,orderBy("timestamp","desc"))
        onSnapshot(collectionRefOrderBy,(snapshot) => {
            let results:Messages[] = [];
            snapshot.docs.forEach((doc) => {
                results.push({
                    timestamp:doc.data().timestamp,
                    message:doc.data().message,
                    user:doc.data().user,
                });
            });
            setSubDocuments(results);
        })
    },[channelId])

  return {subDocuments}
}

export default useSubCollection