import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { countries } from "./Countries";
import { counryListWithLatLong } from "./Countries";
import images from "../config/imageConfig";

function WorldMap() {
  const arr = [
    { txnSent: "IE", amt: "1312.2234 EUR", noTrxn: "12,59,009" },
    { txnSent: "DE", amt: "1312.2234 INR", noTrxn: "12,59,009" },
    { txnSent: "FE", amt: "1312.2234 USD", noTrxn: "12,59,009" },
  ];

  return (
    <div style={{ margin: "auto", width: "100%", height: "700px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
          margin: "auto",
          display: "flex",
        }}
        zoomOnScroll={false}
        series={{
          regions: [
            {
              values: countries,
              scale: [
                "#4A9FC5",
                "#ffffff",
                "#84c4e0",
                "#cee2ce",
                "#5aa9cd",
                "#4f6370",
                "#2286b4",
              ],
              normalizeFunction: "polynomial",
            },
          ],
        }}
        // backgroundColor="gray"
        markers={counryListWithLatLong}
        markerStyle={{
          initial: {
            fill: "#3B63C9",
            stroke: "#3B63C9",
            border: "#3B63C9",
          },
        }}
        onMarkerTipShow={function markerTip(event, label) {
          const countryName = label[0].outerText;

          return label.html(`

          <div style="background-color: green;text-align:center; border: 1px solid skyblue; outline: 10px solid yellow; border-radius: 6px;>
          <div class="card align-items-center" style="border:none">
          <div style="text-algin:center">
          <img style="z-index:9999; margin-top:5px" src=${
            images.INDIA.path
          } alt=${images.INDIA.alt} height=${60} style="margin-top:-30px" />
          </div>
          <div  style="margin-top:20px;border-bottom:2px solid black";width:100% !important"}}>
          <h3 class="card-title mx-3" style="text-align:center">
              ${countryName} 
          </h3>
          </div>
          <div class="card-body">
              <table>
                  <thead style="color:#cee2ce">
                      <th style="text-align:left;padding:3px;width:120px;margin:0px 10px">Txn. Sent To</th>
                      <th style="text-align:right;padding:3px;width:120px;margin:0px 10px">Amt.</th>
                      <th style="text-align:right;padding:3px;width:120px;margin:0px 10px">No. of Txn.</th>
                  </thead>
                  <tbody class="country-table">
                      ${arr.map(
                        (res, index) =>
                          `<tr key=${index}>
                              <td style="text-align:left;width:120px;margin:0px 10px;padding:3px">${res.txnSent}</td>
                              <td style="text-align:right;width:120px;margin:0px 10px;padding:3px">${res.amt}</td>
                              <td style="text-align:right;width:120px;margin:0px 10px;padding:3px">${res.noTrxn}</td>
                          </tr>`
                      )}
                  </tbody>
              </table>
              <table>
              <thead style="color:#cee2ce">
                  <th style="text-align:left;padding:3px;width:120px;margin:0px 10px">Txn. Sent To</th>
                  <th style="text-align:right;padding:3px;width:120px;margin:0px 10px">Amt.</th>
                  <th style="text-align:right;padding:3px;width:120px;margin:0px 10px">No. of Txn.</th>
              </thead>
              <tbody class="country-table">
                  ${arr.map(
                    (res, index) =>
                      `<tr key=${index}>
                          <td style="text-align:left;width:120px;margin:0px 10px;padding:3px">${res.txnSent}</td>
                          <td style="text-align:right;width:120px;margin:0px 10px;padding:3px">${res.amt}</td>
                          <td style="text-align:right;width:120px;margin:0px 10px;padding:3px">${res.noTrxn}</td>
                      </tr>`
                  )}
              </tbody>
          </table>
          </div>
      </div></div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
