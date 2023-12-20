import React from "react";
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
    },
    footer: {
        fontSize: 12,
        textAlign: "center",
        color: "grey",  
    },
})

export default function Bill({apartment}){
    const currentDate = new Date().toLocaleDateString('fr-MA',{
        year: "2-digit",
        month: "2-digit"
    }) 
    const {apartmentFloor, apartmentNumber, apartmentOwner, createdAt} = apartment
    return (
        <Document>
            <Page style={styles.body}>
                <View>
                    <Text style={styles.text}>Appartment Floor : #{apartmentFloor}</Text>
                    <Text style={styles.text}>Appartment Number : #{apartmentNumber}</Text>
                    <Text style={styles.text}>Owner Name : {apartmentOwner.ownerName} </Text>
                    <Text style={styles.text}>Owner's cin: {apartmentOwner.cin} </Text>
                    <Text style={styles.text}>Month Paid: {currentDate}</Text>
                    <Text style={styles.text}>Paid At: {createdAt}</Text>
                    <Text style={styles.text}>Total: $50</Text>
                    <Text style={styles.footer}>Thank you for using DIGISYND</Text>
                </View>
            </Page>
        </Document>
    )
}
    


