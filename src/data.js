const salesData = [
    {
        "Sale ID": "344b8ac8-12fe-4d9c-afd7-74248f0057dd",
        "Product ID": "b1788685-c8b9-4876-8d5c-89013235a51d",
        "Customer ID": "806cbc43-4891-4f44-9e27-2ecf34ab509a",
        "Sale Date": "2024-03-22",
        "Quantity": 4,
        "Unit Price": 161.09,
        "Total Price": 3286.03,
        "Payment Method": "Credit Card",
        "Discount": 0.02,
        "Salesperson": "Michelle Kelly"
    },
    {
        "Sale ID": "c3400ce5-1612-463c-ace1-5bcb8ac00495",
        "Product ID": "02925171-7705-49f7-a2a4-89d55cf4de27",
        "Customer ID": "a3e7a6ed-3060-4eee-8082-ee6242b4918f",
        "Sale Date": "2024-03-25",
        "Quantity": 3,
        "Unit Price": 638.54,
        "Total Price": 537.96,
        "Payment Method": "PayPal",
        "Discount": 0.11,
        "Salesperson": "Joanna Rice"
    },
    {
        "Sale ID": "c2a81ea7-e5df-42de-a169-7fb078fb54d6",
        "Product ID": "07fafa69-1276-4d18-a281-f88549290637",
        "Customer ID": "c8a52b07-2b74-4cc7-9973-385bbfb23faf",
        "Sale Date": "2024-07-08",
        "Quantity": 7,
        "Unit Price": 422.65,
        "Total Price": 77.12,
        "Payment Method": "Credit Card",
        "Discount": 0.08,
        "Salesperson": "Karen Castillo"
    },
    {
        "Sale ID": "9fc8a851-74ac-4678-97ef-3f4981878e3f",
        "Product ID": "55010b21-2c93-426f-bb6b-8e1b01d35081",
        "Customer ID": "f2e52b92-71f9-4ee0-a0d9-b9e010e393a6",
        "Sale Date": "2024-03-29",
        "Quantity": 5,
        "Unit Price": 719.87,
        "Total Price": 3329.61,
        "Payment Method": "Bank Transfer",
        "Discount": 0.18,
        "Salesperson": "Joshua Maxwell"
    },
    {
        "Sale ID": "767c8673-f8dc-401d-9b1f-5491a8403b33",
        "Product ID": "4b8861fb-d5e7-49fd-b747-3233eb4c101d",
        "Customer ID": "cfd42e7c-b139-4ed6-8161-535b6163dd65",
        "Sale Date": "2024-05-30",
        "Quantity": 10,
        "Unit Price": 589.7,
        "Total Price": 103.41,
        "Payment Method": "Credit Card",
        "Discount": 0.03,
        "Salesperson": "Jessica Rivera"
    },
    {
        "Sale ID": "dd2f5a8b-5f2d-4c91-abe8-d498113a2798",
        "Product ID": "3f4ec6c7-e500-4469-a5ea-7af1c794049b",
        "Customer ID": "6549db79-3de4-40d7-86ba-986f7a3650b9",
        "Sale Date": "2024-03-20",
        "Quantity": 10,
        "Unit Price": 393.01,
        "Total Price": 4550.24,
        "Payment Method": "Credit Card",
        "Discount": 0.22,
        "Salesperson": "Erin Bailey"
    },
    {
        "Sale ID": "a5a3331d-6190-4548-a1cb-030b33521ebc",
        "Product ID": "801c0ece-a8e2-4f69-9938-22b32baf3805",
        "Customer ID": "4876517d-8a22-420d-be89-8edb594e55d0",
        "Sale Date": "2024-01-08",
        "Quantity": 6,
        "Unit Price": 363.23,
        "Total Price": 1435.87,
        "Payment Method": "Bank Transfer",
        "Discount": 0.19,
        "Salesperson": "Michelle Whitaker"
    },
    {
        "Sale ID": "31d8ce76-25ec-4774-bcf0-95ba4a3130a0",
        "Product ID": "44b36cdf-ff12-4d39-964f-45d566f8a750",
        "Customer ID": "b986350b-c3b7-494d-9d85-837c0985ca1f",
        "Sale Date": "2024-02-02",
        "Quantity": 3,
        "Unit Price": 389.77,
        "Total Price": 4321.4,
        "Payment Method": "Bank Transfer",
        "Discount": 0.04,
        "Salesperson": "Barbara Gonzalez"
    },
    {
        "Sale ID": "8662cd17-06d2-42c1-878f-de5b64a318bd",
        "Product ID": "ae8f1f76-5e23-420c-8ef0-2d4acc797d61",
        "Customer ID": "4e8bd666-fa2c-4264-b7b5-315b04c757ea",
        "Sale Date": "2024-03-12",
        "Quantity": 2,
        "Unit Price": 11.9,
        "Total Price": 842.43,
        "Payment Method": "Credit Card",
        "Discount": 0.04,
        "Salesperson": "Kari Hamilton"
    },
    {
        "Sale ID": "3cfd353d-85ef-4ed6-8aaa-d6cfa53bfe5f",
        "Product ID": "18ed0267-1e30-4466-bcc6-b23cd53541e8",
        "Customer ID": "2a791614-2359-4790-a711-f51217f7f1a9",
        "Sale Date": "2024-04-27",
        "Quantity": 4,
        "Unit Price": 344.12,
        "Total Price": 5077.56,
        "Payment Method": "PayPal",
        "Discount": 0.05,
        "Salesperson": "Alicia Pope"
    },
    {
        "Sale ID": "1eb1976d-8a80-403a-9660-0a01c5c121b4",
        "Product ID": "d1ec0331-4330-4e2c-a0b2-5906affd78f7",
        "Customer ID": "ddd4e6a0-6ab5-4eb0-b0c6-96d8b20d5637",
        "Sale Date": "2024-03-12",
        "Quantity": 4,
        "Unit Price": 33.32,
        "Total Price": 103.82,
        "Payment Method": "Bank Transfer",
        "Discount": 0.05,
        "Salesperson": "Susan Jackson"
    },
    {
        "Sale ID": "056e482f-825e-4a60-ac0b-142ff518ee82",
        "Product ID": "4c9f406d-98af-4e76-bde1-66339f34b582",
        "Customer ID": "18f2a361-929e-41e4-a9c6-035db931c233",
        "Sale Date": "2024-01-31",
        "Quantity": 7,
        "Unit Price": 738.3,
        "Total Price": 1528.26,
        "Payment Method": "PayPal",
        "Discount": 0.14,
        "Salesperson": "Rachel King"
    },
    {
        "Sale ID": "c92299ce-1444-49c4-9fa2-a73e68b8f6ce",
        "Product ID": "e1a274a9-b728-445a-81c7-c7d61ffbd0cf",
        "Customer ID": "237c1cb3-40aa-4cb1-9ecf-28953beff529",
        "Sale Date": "2024-07-13",
        "Quantity": 1,
        "Unit Price": 787.9,
        "Total Price": 5362.03,
        "Payment Method": "Bank Transfer",
        "Discount": 0.18,
        "Salesperson": "Anthony Romero"
    },
    {
        "Sale ID": "42676e1c-502b-4e29-a10e-312c6329dbc4",
        "Product ID": "dae374df-41d9-4c00-a941-6dc384772252",
        "Customer ID": "35ac6776-28ee-45ad-941d-a2ab74f179cf",
        "Sale Date": "2024-03-14",
        "Quantity": 7,
        "Unit Price": 150.51,
        "Total Price": 686.45,
        "Payment Method": "PayPal",
        "Discount": 0.21,
        "Salesperson": "Robert Robinson"
    },
    {
        "Sale ID": "7e182e56-4bf3-4f08-bed4-27d2b0ddcc01",
        "Product ID": "1e35c3f9-a365-44cd-8193-4f7eacd37b40",
        "Customer ID": "9dcf72bd-29d1-419d-9c65-c0682efd69a0",
        "Sale Date": "2024-04-05",
        "Quantity": 8,
        "Unit Price": 596.64,
        "Total Price": 73.16,
        "Payment Method": "Credit Card",
        "Discount": 0.18,
        "Salesperson": "Traci Young"
    },
    {
        "Sale ID": "e1f4ad4e-f137-4eae-8e8c-0845daa92c07",
        "Product ID": "3d9c7aef-8762-4998-aea8-2539a5216c2d",
        "Customer ID": "1866976d-17e6-49c4-800f-3042e3dbae15",
        "Sale Date": "2024-07-24",
        "Quantity": 1,
        "Unit Price": 926.23,
        "Total Price": 5702.49,
        "Payment Method": "PayPal",
        "Discount": 0.05,
        "Salesperson": "Russell Martinez"
    },
    {
        "Sale ID": "19d99ac3-bda1-4ebb-9ae0-4b2dad0119a1",
        "Product ID": "492fdef5-1cfa-4852-90da-dbb6806693ce",
        "Customer ID": "7fcb3f32-5050-4d6b-bf11-8667eebb6c37",
        "Sale Date": "2024-02-21",
        "Quantity": 2,
        "Unit Price": 734.13,
        "Total Price": 1771.58,
        "Payment Method": "Bank Transfer",
        "Discount": 0.19,
        "Salesperson": "Carlos Baxter"
    },
    {
        "Sale ID": "cb2b988f-21f7-4fb4-93a1-a1eb1d310f3c",
        "Product ID": "cdafcb0d-9b83-4ed1-8759-c65b942cd3f2",
        "Customer ID": "f38737d1-c581-4582-971e-2646503c2633",
        "Sale Date": "2024-06-10",
        "Quantity": 5,
        "Unit Price": 722.28,
        "Total Price": 1549.81,
        "Payment Method": "PayPal",
        "Discount": 0.15,
        "Salesperson": "Melissa Cooper"
    },
    {
        "Sale ID": "35b7ee52-0a53-4f0e-9718-eb38c64d7716",
        "Product ID": "4b3a9dd5-7193-47c1-8ee3-84975f01c9a3",
        "Customer ID": "b10757eb-125c-49d4-aa84-a415695bb1c7",
        "Sale Date": "2024-05-26",
        "Quantity": 10,
        "Unit Price": 798.05,
        "Total Price": 2852.65,
        "Payment Method": "PayPal",
        "Discount": 0.07,
        "Salesperson": "Michael Gonzales"
    },
    {
        "Sale ID": "630c4d84-c96b-4abc-b107-ddbe7200f2a5",
        "Product ID": "5dd75297-ddf1-42c8-bcdd-097823c71765",
        "Customer ID": "add7d3de-9ffa-4b94-901f-ff843e331d6c",
        "Sale Date": "2024-05-23",
        "Quantity": 5,
        "Unit Price": 130.63,
        "Total Price": 2089.33,
        "Payment Method": "PayPal",
        "Discount": 0.17,
        "Salesperson": "Stacey Chan"
    },
    {
        "Sale ID": "2e43c984-f95a-4feb-87fe-1b4c100271e1",
        "Product ID": "76e23803-b51e-4197-ba97-3ee2bec642cc",
        "Customer ID": "5efbe15a-1fa7-484c-bb8c-b42c5c536d47",
        "Sale Date": "2024-01-13",
        "Quantity": 7,
        "Unit Price": 801.62,
        "Total Price": 4639.97,
        "Payment Method": "Credit Card",
        "Discount": 0.01,
        "Salesperson": "Charles Robinson"
    },
    {
        "Sale ID": "cb06af1d-dfce-43dc-9670-eecb9a9cd58d",
        "Product ID": "f44ded4b-9cad-4f2f-b417-4870bd4908df",
        "Customer ID": "418c1f9e-70d2-47d3-8b0e-21a556c9a301",
        "Sale Date": "2024-04-24",
        "Quantity": 7,
        "Unit Price": 749.83,
        "Total Price": 256.3,
        "Payment Method": "Bank Transfer",
        "Discount": 0.17,
        "Salesperson": "Kimberly Brown"
    },
    {
        "Sale ID": "537c818f-eb31-493b-a9c4-9af7b5d96508",
        "Product ID": "011208c3-21ab-4069-a0ac-28c7877e876e",
        "Customer ID": "6a839dc3-666f-428f-8465-9ef7bb2db0e6",
        "Sale Date": "2024-05-06",
        "Quantity": 3,
        "Unit Price": 246.65,
        "Total Price": 2582.47,
        "Payment Method": "Credit Card",
        "Discount": 0.17,
        "Salesperson": "Samuel Turner"
    },
    {
        "Sale ID": "e2657786-fb03-4594-9aab-c7636eb6524c",
        "Product ID": "51bc6e3b-562f-4cd9-91cb-633645f2423f",
        "Customer ID": "d9d79b5f-a9b4-4335-be23-689e2e09db25",
        "Sale Date": "2024-02-06",
        "Quantity": 10,
        "Unit Price": 22.44,
        "Total Price": 902.99,
        "Payment Method": "Credit Card",
        "Discount": 0.02,
        "Salesperson": "Nicole Park"
    },
    {
        "Sale ID": "9f20c50d-7a9b-4ba3-90ba-933a9a7577f2",
        "Product ID": "10639a86-44c6-44af-992a-0333120ddde7",
        "Customer ID": "7082f515-b61e-402b-b32e-85d68c19195a",
        "Sale Date": "2024-05-31",
        "Quantity": 3,
        "Unit Price": 634.29,
        "Total Price": 1793.8,
        "Payment Method": "PayPal",
        "Discount": 0.23,
        "Salesperson": "Daniel Greer"
    },
    {
        "Sale ID": "1fb7533b-9d67-41d9-bc0d-42421c47caae",
        "Product ID": "c7be3e9f-8c40-4045-b83c-32f1b9c09529",
        "Customer ID": "3b737937-f9db-43db-973e-adf8b2d607cd",
        "Sale Date": "2024-02-17",
        "Quantity": 7,
        "Unit Price": 82.89,
        "Total Price": 823.67,
        "Payment Method": "Credit Card",
        "Discount": 0.14,
        "Salesperson": "Thomas Montgomery"
    },
    {
        "Sale ID": "f5ce4973-ed7a-4dcf-b44c-aa6a4bb511f2",
        "Product ID": "74ab13e0-029a-453b-9e4c-8535f97a6d49",
        "Customer ID": "461d5b54-d7e2-416f-96b4-3b998dd5b53c",
        "Sale Date": "2024-06-12",
        "Quantity": 4,
        "Unit Price": 160.26,
        "Total Price": 4121.25,
        "Payment Method": "Credit Card",
        "Discount": 0.09,
        "Salesperson": "Barbara Russell"
    },
    {
        "Sale ID": "71d049ea-b5aa-4d00-b622-0f0322ddd90d",
        "Product ID": "c7b80b84-5e43-4279-a9bf-7e51b07eda9b",
        "Customer ID": "e3bc7801-2f0f-4b8b-8475-5fe9d91ec071",
        "Sale Date": "2024-04-01",
        "Quantity": 2,
        "Unit Price": 112.98,
        "Total Price": 7114.59,
        "Payment Method": "Credit Card",
        "Discount": 0.2,
        "Salesperson": "Kimberly Jackson"
    },
    {
        "Sale ID": "179a66c1-0881-4824-b311-3891bfd79e8e",
        "Product ID": "b68209b7-696b-4474-863f-e2705fbc9022",
        "Customer ID": "e7e82d8a-3953-49ea-88b1-07e406decfc1",
        "Sale Date": "2024-03-10",
        "Quantity": 8,
        "Unit Price": 997.59,
        "Total Price": 9584.78,
        "Payment Method": "PayPal",
        "Discount": 0.02,
        "Salesperson": "Kevin Mills"
    },
    {
        "Sale ID": "58bb0126-f6ed-4f38-9a56-d30a8c5ceff8",
        "Product ID": "f92a0d0c-a404-4ce6-a9bb-4aed89a901cc",
        "Customer ID": "23b8b3e7-387f-48b3-8ecf-62a153c5cb46",
        "Sale Date": "2024-02-29",
        "Quantity": 1,
        "Unit Price": 46.7,
        "Total Price": 4656.17,
        "Payment Method": "Credit Card",
        "Discount": 0.07,
        "Salesperson": "David Frazier"
    },
    {
        "Sale ID": "401bf7bc-8d0a-4379-b23c-f84f9e123177",
        "Product ID": "7a562d47-fc89-4cf6-88db-8c20e1f805e8",
        "Customer ID": "6de712f4-bc10-4f8f-8643-cee29b30bbc0",
        "Sale Date": "2024-05-18",
        "Quantity": 7,
        "Unit Price": 991.87,
        "Total Price": 1541.26,
        "Payment Method": "Credit Card",
        "Discount": 0.03,
        "Salesperson": "Mr. Andrew Thomas"
    },
    {
        "Sale ID": "f9621955-7c71-45c3-bac4-3da583ea5594",
        "Product ID": "53e1ea9b-324a-46e9-92d3-5b342c3bc581",
        "Customer ID": "bf697cd6-5607-4f94-a3ec-c84f77b53cae",
        "Sale Date": "2024-05-15",
        "Quantity": 3,
        "Unit Price": 892.15,
        "Total Price": 690.23,
        "Payment Method": "PayPal",
        "Discount": 0.12,
        "Salesperson": "Albert Johnson"
    },
    {
        "Sale ID": "a7886d01-5dbc-45d9-a779-3082d310d153",
        "Product ID": "6c74f684-b30c-4fde-9749-8272562be46d",
        "Customer ID": "f969ffc4-551c-480e-a95d-3f880901f345",
        "Sale Date": "2024-07-08",
        "Quantity": 9,
        "Unit Price": 647.61,
        "Total Price": 1120.75,
        "Payment Method": "Bank Transfer",
        "Discount": 0.1,
        "Salesperson": "Monique Dominguez"
    },
    {
        "Sale ID": "27d8a6ee-4396-48b2-b701-4747e1d8ecfc",
        "Product ID": "d539f0e8-3df5-4c2f-8e2c-be4bd752d434",
        "Customer ID": "5e96699d-831b-46b5-a604-cff6ac6b939c",
        "Sale Date": "2024-04-05",
        "Quantity": 5,
        "Unit Price": 496.96,
        "Total Price": 1722.61,
        "Payment Method": "Bank Transfer",
        "Discount": 0.06,
        "Salesperson": "David Campbell"
    },
    {
        "Sale ID": "905d4941-95e8-4eab-b06a-96be80a3ae5b",
        "Product ID": "b460487c-5dda-4215-bd27-ca132c79e1b3",
        "Customer ID": "e67a7244-0daf-486f-9b11-e1a3e421bac2",
        "Sale Date": "2024-07-29",
        "Quantity": 8,
        "Unit Price": 339.02,
        "Total Price": 2846.23,
        "Payment Method": "Credit Card",
        "Discount": 0.21,
        "Salesperson": "Aimee Davidson"
    },
    {
        "Sale ID": "c5c50201-f33b-4601-906a-ce6318969f24",
        "Product ID": "e2ac8dcf-4360-4012-99ae-0c1e581bd2a3",
        "Customer ID": "b459fc94-44c8-4cd8-87a7-021ee4b2ab4a",
        "Sale Date": "2024-05-04",
        "Quantity": 9,
        "Unit Price": 68.38,
        "Total Price": 1223.67,
        "Payment Method": "Credit Card",
        "Discount": 0.14,
        "Salesperson": "Morgan Delacruz"
    },
    {
        "Sale ID": "e21a18bd-aa21-4a99-b601-0ce214abd530",
        "Product ID": "f6c45d49-b3b4-4e09-93a7-f948bcfd52d4",
        "Customer ID": "8d0954f6-eac7-4519-aaf3-7429b7561d17",
        "Sale Date": "2024-06-09",
        "Quantity": 6,
        "Unit Price": 871.3,
        "Total Price": 827.47,
        "Payment Method": "PayPal",
        "Discount": 0.19,
        "Salesperson": "Clayton Turner"
    },
    {
        "Sale ID": "3a256c16-9f2e-4ca4-8764-f8245b466aa7",
        "Product ID": "f89e180e-1a77-47a0-84ba-caa4ec3b1e50",
        "Customer ID": "ca9c54db-876b-4496-8008-c70d373dc86c",
        "Sale Date": "2024-07-18",
        "Quantity": 10,
        "Unit Price": 229.9,
        "Total Price": 2292.22,
        "Payment Method": "Bank Transfer",
        "Discount": 0.16,
        "Salesperson": "Logan Perkins"
    },
    {
        "Sale ID": "9a51dc15-bce1-4588-ab33-7d046e7d4fb7",
        "Product ID": "2d3fe744-a85a-43b9-b802-7dc7fecf611b",
        "Customer ID": "3ffd8383-347c-41fc-be65-2ef1d60a626f",
        "Sale Date": "2024-01-31",
        "Quantity": 2,
        "Unit Price": 297.62,
        "Total Price": 931.32,
        "Payment Method": "Bank Transfer",
        "Discount": 0.22,
        "Salesperson": "Adrian Johnston"
    },
    {
        "Sale ID": "92055000-4033-432e-882e-981d5d32ae75",
        "Product ID": "10697dde-c78c-403f-bcbe-ffe76b0f7eb0",
        "Customer ID": "82b99ecb-aa2f-4cee-8b02-2ea7541d90eb",
        "Sale Date": "2024-04-30",
        "Quantity": 3,
        "Unit Price": 37.58,
        "Total Price": 7625.01,
        "Payment Method": "Credit Card",
        "Discount": 0.19,
        "Salesperson": "Patrick Duarte"
    },
    {
        "Sale ID": "762a7a64-2cd4-4414-81d9-62ca2fb18f3c",
        "Product ID": "469496b3-78f8-4dea-9a1d-47e7acdb7c3e",
        "Customer ID": "0bf28251-5d61-45af-9f8e-429aa22d4ba7",
        "Sale Date": "2024-01-03",
        "Quantity": 9,
        "Unit Price": 733.12,
        "Total Price": 4330.02,
        "Payment Method": "PayPal",
        "Discount": 0.25,
        "Salesperson": "Jay Lee"
    },
    {
        "Sale ID": "e0231b7d-4722-4a43-ae65-e250c3a7161c",
        "Product ID": "e4e63826-8b8e-46fc-b577-4dbf8cae0fe4",
        "Customer ID": "0779609f-8eac-466a-be6d-ff922578c48e",
        "Sale Date": "2024-01-23",
        "Quantity": 7,
        "Unit Price": 702.9,
        "Total Price": 3788.09,
        "Payment Method": "Bank Transfer",
        "Discount": 0.27,
        "Salesperson": "Bonnie Herrera"
    },
    {
        "Sale ID": "a4624806-a7ba-4392-97d7-7632b1f80367",
        "Product ID": "114d6fff-1663-46de-b406-71b8ad317b9d",
        "Customer ID": "73259379-efde-4f96-826b-e402c679e852",
        "Sale Date": "2024-02-15",
        "Quantity": 8,
        "Unit Price": 643.85,
        "Total Price": 3684.8,
        "Payment Method": "Bank Transfer",
        "Discount": 0.29,
        "Salesperson": "Terrence Reynolds"
    },
    {
        "Sale ID": "c8c1bedd-7bc9-492b-a3b2-822c4c459247",
        "Product ID": "81c8319d-65fe-4356-85ff-c204efc1ea68",
        "Customer ID": "796ce375-03f3-46cc-b5df-ae2450fbf127",
        "Sale Date": "2024-06-01",
        "Quantity": 1,
        "Unit Price": 309.99,
        "Total Price": 375.12,
        "Payment Method": "Credit Card",
        "Discount": 0.15,
        "Salesperson": "David Woods"
    },
    {
        "Sale ID": "c3255a88-ee46-4ccf-9164-d8d31fb85eab",
        "Product ID": "2ccf968d-96e0-4b98-9def-5a6c04ac8f74",
        "Customer ID": "64652dc5-7d8a-4ede-8dfe-39012cbfb844",
        "Sale Date": "2024-04-21",
        "Quantity": 10,
        "Unit Price": 909.28,
        "Total Price": 1294.77,
        "Payment Method": "Credit Card",
        "Discount": 0.23,
        "Salesperson": "Elizabeth Escobar"
    },
    {
        "Sale ID": "8bbf7723-de20-454e-abdb-1f370275edcd",
        "Product ID": "60e830d4-fa52-43ba-8e05-064920aba6aa",
        "Customer ID": "24c46e03-12da-466c-9d41-99b12305b05d",
        "Sale Date": "2024-03-04",
        "Quantity": 6,
        "Unit Price": 615.58,
        "Total Price": 6114.98,
        "Payment Method": "Credit Card",
        "Discount": 0.19,
        "Salesperson": "Allison Jones"
    },
    {
        "Sale ID": "0f6bbdb0-bd41-4045-9f80-a3de86b47dc0",
        "Product ID": "5b8bbbfd-3ba6-4300-b5b6-613bd3db15e2",
        "Customer ID": "b2a9659a-dd64-4d90-ac4d-95f161d0896a",
        "Sale Date": "2024-04-07",
        "Quantity": 9,
        "Unit Price": 134.67,
        "Total Price": 3044.24,
        "Payment Method": "Bank Transfer",
        "Discount": 0.08,
        "Salesperson": "Jonathan Brown"
    },
    {
        "Sale ID": "03b713d6-253f-44a7-b5e3-ea024cb9e149",
        "Product ID": "a2f6f620-fe6d-4b3a-8777-9a11f35d4b2a",
        "Customer ID": "44e8c630-f8ec-426a-a0f0-d65ad46d7715",
        "Sale Date": "2024-06-25",
        "Quantity": 4,
        "Unit Price": 708.04,
        "Total Price": 431.93,
        "Payment Method": "Bank Transfer",
        "Discount": 0.2,
        "Salesperson": "Nicole Thompson MD"
    },
    {
        "Sale ID": "99f2f340-7505-4123-b3ca-a4a749217744",
        "Product ID": "b7440bff-88f1-4cef-bcb8-4bec9bd8a7fd",
        "Customer ID": "c3241f27-c865-46e8-8d89-c7c4f421bb52",
        "Sale Date": "2024-07-11",
        "Quantity": 2,
        "Unit Price": 265.07,
        "Total Price": 1774.01,
        "Payment Method": "Credit Card",
        "Discount": 0.25,
        "Salesperson": "Joel Brown"
    },
    {
        "Sale ID": "6e2ff59d-02cc-446e-bb1b-344f2a8778c3",
        "Product ID": "dc08a4bf-325a-4545-a840-1878ef8b817d",
        "Customer ID": "d0d9b9fc-dd7e-4fed-bdbe-f7e04af265de",
        "Sale Date": "2024-05-15",
        "Quantity": 7,
        "Unit Price": 178.94,
        "Total Price": 4950.2,
        "Payment Method": "Credit Card",
        "Discount": 0.08,
        "Salesperson": "Belinda Gardner"
    },
    {
        "Sale ID": "980c9152-d9e1-4a2b-b87a-6616a6d63441",
        "Product ID": "9036855f-7713-45fd-b40a-55330b993991",
        "Customer ID": "a210e5f4-2b9b-4f53-8359-70d0c24c272a",
        "Sale Date": "2024-04-29",
        "Quantity": 8,
        "Unit Price": 634.05,
        "Total Price": 2960.84,
        "Payment Method": "PayPal",
        "Discount": 0.22,
        "Salesperson": "David Peterson"
    },
    {
        "Sale ID": "ae0d57c4-e25d-4b6a-a20a-32dac04d8197",
        "Product ID": "0762f971-14dc-408a-ab11-3b4d9407fac1",
        "Customer ID": "ebc26c61-5e9b-42f8-b2d3-c432022905ae",
        "Sale Date": "2024-05-07",
        "Quantity": 1,
        "Unit Price": 934.51,
        "Total Price": 850.14,
        "Payment Method": "Credit Card",
        "Discount": 0.29,
        "Salesperson": "Kimberly Gomez"
    },
    {
        "Sale ID": "2bdab171-2c9a-4570-ab07-b4b1adf178b5",
        "Product ID": "4ea7acd2-7284-427a-a436-741dc86c468e",
        "Customer ID": "98595523-566e-4c76-971d-17a7b80cd94d",
        "Sale Date": "2024-06-12",
        "Quantity": 2,
        "Unit Price": 314.58,
        "Total Price": 2057.73,
        "Payment Method": "PayPal",
        "Discount": 0.15,
        "Salesperson": "Mr. Joshua Deleon"
    },
    {
        "Sale ID": "f8c62a73-fbe1-40f6-b65f-0534dd89b06a",
        "Product ID": "fff09bb0-c3a2-49cb-931d-49fb90ffa664",
        "Customer ID": "7fcab7fd-81fe-426c-9897-a150f435fefc",
        "Sale Date": "2024-01-27",
        "Quantity": 5,
        "Unit Price": 733.55,
        "Total Price": 7488.87,
        "Payment Method": "Credit Card",
        "Discount": 0.17,
        "Salesperson": "Larry Burton"
    },
    {
        "Sale ID": "32eac730-4f8a-46bc-abd6-cb1b39f36961",
        "Product ID": "27a5c612-226e-454c-8f4f-cf71188339aa",
        "Customer ID": "26b6b1bb-4777-4c18-8b2e-a48f6fde8f1d",
        "Sale Date": "2024-06-22",
        "Quantity": 6,
        "Unit Price": 455.03,
        "Total Price": 1375.13,
        "Payment Method": "Bank Transfer",
        "Discount": 0.17,
        "Salesperson": "Tyler Hull"
    },
    {
        "Sale ID": "01d794f3-ef11-40d5-abcb-ed9928318921",
        "Product ID": "efad0571-94a7-4a0c-b640-4057cac4de8e",
        "Customer ID": "0db44fa4-6204-43ff-a7c5-8950557509ac",
        "Sale Date": "2024-03-22",
        "Quantity": 3,
        "Unit Price": 518.06,
        "Total Price": 9752.0,
        "Payment Method": "Credit Card",
        "Discount": 0.16,
        "Salesperson": "Joyce Patrick"
    },
    {
        "Sale ID": "33aa0bdd-1646-43a7-a4db-1ff37dcf9891",
        "Product ID": "ae7583fe-528c-4abe-b388-549aca1d9fe4",
        "Customer ID": "67c3c25e-7c56-4cdb-b5f1-83abc118936c",
        "Sale Date": "2024-01-17",
        "Quantity": 6,
        "Unit Price": 17.85,
        "Total Price": 5224.22,
        "Payment Method": "Credit Card",
        "Discount": 0.24,
        "Salesperson": "Scott Johnson"
    },
    {
        "Sale ID": "3d50df8e-24cd-4a41-8f59-0f7aab075939",
        "Product ID": "bc5607f3-3d84-4bad-8f27-77a0330292e6",
        "Customer ID": "51a477c3-6ac3-4aa2-869e-a2a62a4be0a3",
        "Sale Date": "2024-04-06",
        "Quantity": 9,
        "Unit Price": 264.87,
        "Total Price": 2329.63,
        "Payment Method": "Bank Transfer",
        "Discount": 0.2,
        "Salesperson": "Russell Garcia"
    },
    {
        "Sale ID": "285d9b72-95c1-49cb-90b4-5213b92af16e",
        "Product ID": "f03e7009-9dba-476f-be1d-e793a4393c72",
        "Customer ID": "7568514e-ab8e-48aa-9677-e63d70f5be1f",
        "Sale Date": "2024-05-10",
        "Quantity": 9,
        "Unit Price": 761.76,
        "Total Price": 2841.6,
        "Payment Method": "Bank Transfer",
        "Discount": 0.22,
        "Salesperson": "Ashley Gonzalez"
    },
    {
        "Sale ID": "4f06580a-680e-4bfc-92fa-50314230a2ff",
        "Product ID": "e2c9f93c-41d8-45f5-9cec-99cce459edbe",
        "Customer ID": "3123c590-fa14-46c5-baf8-81a1581afe19",
        "Sale Date": "2024-02-08",
        "Quantity": 9,
        "Unit Price": 588.89,
        "Total Price": 2516.77,
        "Payment Method": "Credit Card",
        "Discount": 0.11,
        "Salesperson": "James Pierce"
    },
    {
        "Sale ID": "7b52567f-fe7c-4347-aef8-de3299394058",
        "Product ID": "43edc305-d925-41ed-adc8-e59eb60339ce",
        "Customer ID": "659dd08b-ff12-4993-ad46-3f015db99c04",
        "Sale Date": "2024-06-25",
        "Quantity": 3,
        "Unit Price": 111.2,
        "Total Price": 467.51,
        "Payment Method": "Credit Card",
        "Discount": 0.28,
        "Salesperson": "James King"
    },
    {
        "Sale ID": "266b0f19-8c2f-4431-bb78-1e79528405a6",
        "Product ID": "da288864-26a5-4ad6-93d7-96f130be6277",
        "Customer ID": "855c2372-365f-4774-b685-35d9080cb9e9",
        "Sale Date": "2024-02-24",
        "Quantity": 1,
        "Unit Price": 415.19,
        "Total Price": 4552.19,
        "Payment Method": "Bank Transfer",
        "Discount": 0.27,
        "Salesperson": "Kathleen Boyer"
    },
    {
        "Sale ID": "7e872e06-51a8-436f-a6b7-42dcf100370b",
        "Product ID": "89706161-176d-434e-a51e-9a0cfd85ce22",
        "Customer ID": "64701673-74f5-48b9-beee-3a38511b3297",
        "Sale Date": "2024-06-16",
        "Quantity": 8,
        "Unit Price": 226.87,
        "Total Price": 322.96,
        "Payment Method": "Bank Transfer",
        "Discount": 0.23,
        "Salesperson": "Thomas Sanchez"
    },
    {
        "Sale ID": "df20e9c9-ee5d-4e77-97c1-daa8082613f4",
        "Product ID": "45cb0e33-aaa5-46db-b90a-5fc7990d36e6",
        "Customer ID": "066963b3-ef4f-428e-89a6-4e9e48c24fde",
        "Sale Date": "2024-05-27",
        "Quantity": 5,
        "Unit Price": 449.59,
        "Total Price": 5454.24,
        "Payment Method": "Credit Card",
        "Discount": 0.23,
        "Salesperson": "Frank Adams"
    },
    {
        "Sale ID": "727efec2-1c9c-40a2-9727-029f337c2500",
        "Product ID": "7e9e0232-dff7-4fae-960f-0fa70c7c3d20",
        "Customer ID": "e1ef24c9-942b-4888-895b-3b1e5bede839",
        "Sale Date": "2024-02-15",
        "Quantity": 4,
        "Unit Price": 480.14,
        "Total Price": 1454.61,
        "Payment Method": "PayPal",
        "Discount": 0.22,
        "Salesperson": "Joseph Gardner"
    },
    {
        "Sale ID": "57abd6a1-e5ee-4a0e-897c-387f85d13268",
        "Product ID": "f2caf2b4-ec8e-481f-8fd3-3b47eeb06a40",
        "Customer ID": "12e4951e-b8cd-49af-a7fb-8f8b1c3cf749",
        "Sale Date": "2024-07-24",
        "Quantity": 2,
        "Unit Price": 274.9,
        "Total Price": 597.31,
        "Payment Method": "PayPal",
        "Discount": 0.21,
        "Salesperson": "Catherine Shah"
    },
    {
        "Sale ID": "6cc180f9-9692-442c-a835-6e2cd5297fee",
        "Product ID": "3a3d1997-8d7e-45d2-8b6d-1da53b2b8a42",
        "Customer ID": "8c8cf766-ed43-44c4-8468-6afaa23a9e0b",
        "Sale Date": "2024-04-23",
        "Quantity": 4,
        "Unit Price": 119.17,
        "Total Price": 525.78,
        "Payment Method": "PayPal",
        "Discount": 0.07,
        "Salesperson": "Jonathan Johnson"
    },
    {
        "Sale ID": "31b00adf-6f22-4f76-8d59-90ed60d6ba42",
        "Product ID": "32115cd8-e2b6-4dc2-9f99-5c0cee7fcbc7",
        "Customer ID": "0590148b-cddf-4387-bd89-4114cedbad8c",
        "Sale Date": "2024-05-27",
        "Quantity": 6,
        "Unit Price": 778.22,
        "Total Price": 476.84,
        "Payment Method": "Bank Transfer",
        "Discount": 0.1,
        "Salesperson": "Robert Johnson"
    },
    {
        "Sale ID": "067946b9-212a-4dc2-bb66-0349890610c5",
        "Product ID": "7b888ee0-a1ca-466d-8925-a5c17ea64494",
        "Customer ID": "aa5214a3-9c81-4ca3-bc68-e86d0feb9ecf",
        "Sale Date": "2024-02-29",
        "Quantity": 4,
        "Unit Price": 912.52,
        "Total Price": 649.78,
        "Payment Method": "Bank Transfer",
        "Discount": 0.29,
        "Salesperson": "Ruth Anderson"
    },
    {
        "Sale ID": "96a8d5d2-283d-4815-b116-0dcaf037a82c",
        "Product ID": "adda8471-e2df-40be-8fd5-7389e0b07999",
        "Customer ID": "b79c2566-68e1-49eb-98b4-0c53a6525abd",
        "Sale Date": "2024-05-15",
        "Quantity": 9,
        "Unit Price": 393.67,
        "Total Price": 4138.19,
        "Payment Method": "PayPal",
        "Discount": 0.15,
        "Salesperson": "Glenn Briggs"
    },
    {
        "Sale ID": "eb8eb0d7-18cd-4d43-8399-f64392074d74",
        "Product ID": "40703742-4c3b-46b1-b4ed-14d3451705fc",
        "Customer ID": "ee0bd0d9-e78e-4c97-ab8e-b3b7759ed14f",
        "Sale Date": "2024-04-02",
        "Quantity": 7,
        "Unit Price": 990.49,
        "Total Price": 578.74,
        "Payment Method": "Credit Card",
        "Discount": 0.18,
        "Salesperson": "Andrea Hunter"
    },
    {
        "Sale ID": "bd43a52a-a90c-49af-ab47-489b19d644d4",
        "Product ID": "4f2f856d-471a-4302-acb0-8c51d7122117",
        "Customer ID": "f5d7b28e-165d-45aa-be53-0547e681e8c6",
        "Sale Date": "2024-01-27",
        "Quantity": 9,
        "Unit Price": 902.27,
        "Total Price": 645.64,
        "Payment Method": "PayPal",
        "Discount": 0.11,
        "Salesperson": "Jacqueline Price"
    },
    {
        "Sale ID": "aaeebf82-bf3f-452a-8bca-36fa11cfee18",
        "Product ID": "88811055-88f5-401c-b9df-af81a8a156c7",
        "Customer ID": "83191359-fdb1-47c8-85a0-9f743346cdf3",
        "Sale Date": "2024-07-08",
        "Quantity": 7,
        "Unit Price": 240.59,
        "Total Price": 922.71,
        "Payment Method": "Credit Card",
        "Discount": 0.19,
        "Salesperson": "Catherine Barron"
    },
    {
        "Sale ID": "a5bce760-0142-425d-b70b-25c7a2d7b02a",
        "Product ID": "2dad4985-f64f-4bb2-ac84-653bc3af25f8",
        "Customer ID": "289a32b5-4bea-49c9-a236-df66f008f3a8",
        "Sale Date": "2024-04-16",
        "Quantity": 6,
        "Unit Price": 963.08,
        "Total Price": 2363.81,
        "Payment Method": "Credit Card",
        "Discount": 0.3,
        "Salesperson": "Kristen Flynn"
    },
    {
        "Sale ID": "0aa99a71-cb3e-4e3f-acee-a979989078c5",
        "Product ID": "821b67c3-8235-440d-89d5-8d7214e5ea79",
        "Customer ID": "88f831ea-721e-494b-9af9-7e73ff4f9e4d",
        "Sale Date": "2024-06-12",
        "Quantity": 5,
        "Unit Price": 307.94,
        "Total Price": 2574.2,
        "Payment Method": "Bank Transfer",
        "Discount": 0.14,
        "Salesperson": "Justin Smith"
    },
    {
        "Sale ID": "16441394-6caa-447b-9979-c1d76ba1bf64",
        "Product ID": "fd43c842-621f-476e-bd4c-42b0eb22cf41",
        "Customer ID": "806ed733-fd50-436d-887e-153544795c2d",
        "Sale Date": "2024-05-20",
        "Quantity": 6,
        "Unit Price": 334.0,
        "Total Price": 1139.02,
        "Payment Method": "Credit Card",
        "Discount": 0.02,
        "Salesperson": "Phyllis Goodwin"
    },
    {
        "Sale ID": "289e38a2-5b2c-4027-9157-0539783a16de",
        "Product ID": "81e1c316-8f49-4870-8b62-35914a11016f",
        "Customer ID": "9d48b939-ab11-4178-9f1a-b160484c6e56",
        "Sale Date": "2024-04-21",
        "Quantity": 3,
        "Unit Price": 324.65,
        "Total Price": 908.77,
        "Payment Method": "Bank Transfer",
        "Discount": 0.28,
        "Salesperson": "Mrs. Jordan Williams"
    },
    {
        "Sale ID": "fed675d2-e63a-432d-b32b-9aa8a150c844",
        "Product ID": "44314dc2-29fb-42f8-9864-e46cb0a686ea",
        "Customer ID": "646d70fe-6ee0-4171-bcf6-c4942d8e36a5",
        "Sale Date": "2024-01-08",
        "Quantity": 8,
        "Unit Price": 526.48,
        "Total Price": 3331.25,
        "Payment Method": "Credit Card",
        "Discount": 0.22,
        "Salesperson": "Michael Walters"
    },
    {
        "Sale ID": "bd46bd32-483e-4012-a3fa-d9b547f617da",
        "Product ID": "ee93a1f2-ad29-42a0-979d-60f6fa55aed9",
        "Customer ID": "f3485ca4-76f6-42c0-9dbd-7cb3c9692c7e",
        "Sale Date": "2024-01-07",
        "Quantity": 3,
        "Unit Price": 433.65,
        "Total Price": 5156.38,
        "Payment Method": "PayPal",
        "Discount": 0.06,
        "Salesperson": "Angela Randall"
    },
    {
        "Sale ID": "9c66b47b-1b19-4b9e-aae3-a9bd67e3b740",
        "Product ID": "6cd29bbb-9fb6-4220-aebd-e4e8d7496cae",
        "Customer ID": "a99abcfe-54b6-4c9f-b651-65c2a5a0c1fc",
        "Sale Date": "2024-01-13",
        "Quantity": 2,
        "Unit Price": 95.49,
        "Total Price": 2630.21,
        "Payment Method": "Credit Card",
        "Discount": 0.3,
        "Salesperson": "Jake Williams"
    },
    {
        "Sale ID": "07beb767-9d8b-42dc-946c-5c498a0d1e63",
        "Product ID": "83fb2ba1-31aa-4a5a-a9eb-53f8fce735be",
        "Customer ID": "593346fa-1303-40a2-aa17-3f9488f4f635",
        "Sale Date": "2024-02-14",
        "Quantity": 7,
        "Unit Price": 929.1,
        "Total Price": 5263.97,
        "Payment Method": "Credit Card",
        "Discount": 0.26,
        "Salesperson": "Sharon Jackson"
    },
    {
        "Sale ID": "c52d2940-42ea-4cf0-8137-deb2d95b02b4",
        "Product ID": "f80c5a73-7df8-42a2-8071-1965792cb464",
        "Customer ID": "599c5399-93b6-4fa5-98d6-039ba7a72e53",
        "Sale Date": "2024-02-05",
        "Quantity": 4,
        "Unit Price": 740.38,
        "Total Price": 2253.44,
        "Payment Method": "PayPal",
        "Discount": 0.15,
        "Salesperson": "John Jones"
    },
    {
        "Sale ID": "c1d566ae-959b-4273-916e-aa8644f679d3",
        "Product ID": "71b3a4f1-fb76-44f8-aaaa-ce9d42eab5d7",
        "Customer ID": "2a385adc-e527-4d10-9856-57fdf22f7b73",
        "Sale Date": "2024-05-14",
        "Quantity": 1,
        "Unit Price": 617.51,
        "Total Price": 4010.21,
        "Payment Method": "PayPal",
        "Discount": 0.09,
        "Salesperson": "Gregory Carter"
    },
    {
        "Sale ID": "0653bd34-3d3d-4441-a433-cf85da281237",
        "Product ID": "ef9dcc52-a221-45d3-bdba-17916fd0fec0",
        "Customer ID": "2e600f91-d340-4412-8b67-b5accb54565a",
        "Sale Date": "2024-06-21",
        "Quantity": 9,
        "Unit Price": 517.25,
        "Total Price": 4884.26,
        "Payment Method": "PayPal",
        "Discount": 0.27,
        "Salesperson": "Michael Rogers"
    },
    {
        "Sale ID": "8ef101ff-fc9a-4f5c-98c3-94074d598008",
        "Product ID": "4c2f20ce-9299-4405-b757-4befdd96f78b",
        "Customer ID": "b7a7afb7-0944-4e8b-a780-e4083feb588d",
        "Sale Date": "2024-07-06",
        "Quantity": 9,
        "Unit Price": 472.72,
        "Total Price": 2359.92,
        "Payment Method": "PayPal",
        "Discount": 0.16,
        "Salesperson": "Melissa Freeman"
    },
    {
        "Sale ID": "e4c9fa1a-9aad-489f-8fe6-5bad727885d4",
        "Product ID": "09b88c83-9baf-4bf1-a0e6-43938a4c7e41",
        "Customer ID": "90fea50b-3159-4fa6-aacc-cddb1e5d4a90",
        "Sale Date": "2024-07-25",
        "Quantity": 2,
        "Unit Price": 618.62,
        "Total Price": 4975.03,
        "Payment Method": "Bank Transfer",
        "Discount": 0.26,
        "Salesperson": "Patricia Walsh"
    },
    {
        "Sale ID": "26229195-31f4-43b2-a376-c2ca9c5cff63",
        "Product ID": "db05da5d-5335-4926-9df7-f481b8e71fd5",
        "Customer ID": "bde56ac8-4301-4e81-be89-4cdf8827c20d",
        "Sale Date": "2024-04-17",
        "Quantity": 5,
        "Unit Price": 218.43,
        "Total Price": 7910.52,
        "Payment Method": "Credit Card",
        "Discount": 0.0,
        "Salesperson": "Whitney Walsh"
    },
    {
        "Sale ID": "9f976d03-d52b-4613-b812-8b0ea4afd2c7",
        "Product ID": "bc4097fb-e3b9-4848-94ff-a755268a9a07",
        "Customer ID": "7f2e54e9-0777-4c78-b854-4790450db2a2",
        "Sale Date": "2024-06-02",
        "Quantity": 5,
        "Unit Price": 919.92,
        "Total Price": 2785.82,
        "Payment Method": "PayPal",
        "Discount": 0.09,
        "Salesperson": "Joseph Best"
    },
    {
        "Sale ID": "b540a2fb-1cbe-44a4-8e55-2dc5467c12eb",
        "Product ID": "756a2d5b-a086-4d23-be4f-28d78a915dc6",
        "Customer ID": "0cf95093-916a-46ae-b765-ec4f89a14742",
        "Sale Date": "2024-05-02",
        "Quantity": 9,
        "Unit Price": 660.88,
        "Total Price": 7355.48,
        "Payment Method": "PayPal",
        "Discount": 0.06,
        "Salesperson": "Jesse Campbell"
    },
    {
        "Sale ID": "dcfa7abd-1239-4a10-a4ca-6e16568c5cc7",
        "Product ID": "26d15288-b9f0-43bc-8be8-b0cdffe3aa52",
        "Customer ID": "0d7f8a1e-6663-4af4-bd8f-861e93d37ac1",
        "Sale Date": "2024-07-25",
        "Quantity": 1,
        "Unit Price": 817.61,
        "Total Price": 1696.51,
        "Payment Method": "Bank Transfer",
        "Discount": 0.21,
        "Salesperson": "Heather Keller"
    },
    {
        "Sale ID": "11effe52-bb07-4dc3-b1fe-0a40968a6f42",
        "Product ID": "da54853c-2653-4d26-92cd-9abe90b332ce",
        "Customer ID": "9180c516-5d98-4c8f-882d-f3d8502f19bf",
        "Sale Date": "2024-05-10",
        "Quantity": 7,
        "Unit Price": 946.79,
        "Total Price": 503.38,
        "Payment Method": "PayPal",
        "Discount": 0.18,
        "Salesperson": "Brianna Pena"
    },
    {
        "Sale ID": "973ddd98-77b4-4603-9ec5-27d28c1197a0",
        "Product ID": "0fa1c340-9fc6-4e10-9c5a-a39c69a31fb5",
        "Customer ID": "81052fdc-39ca-4fdf-8b49-b11d0fdf77d2",
        "Sale Date": "2024-07-17",
        "Quantity": 4,
        "Unit Price": 415.62,
        "Total Price": 1021.61,
        "Payment Method": "Credit Card",
        "Discount": 0.25,
        "Salesperson": "Brittany Adams"
    },
    {
        "Sale ID": "cb953223-817b-433b-9c36-91a4aa513f06",
        "Product ID": "a0c338ec-db85-47d0-a257-3175694c8d10",
        "Customer ID": "fa78c7c9-5262-4a3e-ad05-2eed0a7d3e3d",
        "Sale Date": "2024-05-27",
        "Quantity": 7,
        "Unit Price": 980.86,
        "Total Price": 4762.78,
        "Payment Method": "Credit Card",
        "Discount": 0.09,
        "Salesperson": "Casey Martinez"
    },
    {
        "Sale ID": "3408a7b6-318b-455b-9919-3dabaa9ba8db",
        "Product ID": "dfebca59-fdc8-4617-b0d0-0feecbb35221",
        "Customer ID": "cda2a5af-5128-463c-9ba4-8e6af7d64b09",
        "Sale Date": "2024-03-10",
        "Quantity": 6,
        "Unit Price": 214.82,
        "Total Price": 7540.42,
        "Payment Method": "Credit Card",
        "Discount": 0.23,
        "Salesperson": "Briana Mcfarland"
    },
    {
        "Sale ID": "bb1eb4ea-45bc-4e64-9856-591c47912f4b",
        "Product ID": "b2b67944-b4b3-49ea-8dfc-f65fee040d69",
        "Customer ID": "0b943656-aee8-40b2-bb8d-c8e08428d0aa",
        "Sale Date": "2024-02-16",
        "Quantity": 7,
        "Unit Price": 285.28,
        "Total Price": 6684.9,
        "Payment Method": "Bank Transfer",
        "Discount": 0.26,
        "Salesperson": "Henry Scott"
    },
    {
        "Sale ID": "2e0e3e63-0851-4426-b8e8-821fee6164c9",
        "Product ID": "01b68528-51d7-4b56-8cda-5b0083f84318",
        "Customer ID": "32459407-dbc7-4d8d-b70c-bcd16b18ee95",
        "Sale Date": "2024-03-27",
        "Quantity": 6,
        "Unit Price": 613.0,
        "Total Price": 590.79,
        "Payment Method": "PayPal",
        "Discount": 0.18,
        "Salesperson": "Catherine Smith"
    },
    {
        "Sale ID": "df4bd250-ba4f-45e7-98b3-0159f1751cba",
        "Product ID": "68251e8d-9400-4679-8b3d-b8c527fe7d60",
        "Customer ID": "b134ea94-2fb2-4746-a26b-de27e7944b6e",
        "Sale Date": "2024-03-31",
        "Quantity": 9,
        "Unit Price": 956.3,
        "Total Price": 2610.45,
        "Payment Method": "Credit Card",
        "Discount": 0.06,
        "Salesperson": "Debra Williams"
    },
    {
        "Sale ID": "743951ca-6ae0-49b9-91bd-a238330bd5dc",
        "Product ID": "5f8f3fcb-a8c6-4548-89d5-47537d5b7c14",
        "Customer ID": "72765fd8-b173-47b2-9d30-50dd5d4517d1",
        "Sale Date": "2024-02-28",
        "Quantity": 4,
        "Unit Price": 334.69,
        "Total Price": 832.02,
        "Payment Method": "PayPal",
        "Discount": 0.02,
        "Salesperson": "Ricky Obrien"
    },
    {
        "Sale ID": "538a2d2c-9b73-4974-81d9-3def03dfb7db",
        "Product ID": "37bc6590-2bb3-4865-bfef-ce8279f773ff",
        "Customer ID": "27fbf466-d501-4578-9b82-d1283a36dbea",
        "Sale Date": "2024-05-08",
        "Quantity": 1,
        "Unit Price": 649.28,
        "Total Price": 613.64,
        "Payment Method": "PayPal",
        "Discount": 0.24,
        "Salesperson": "Christine Johnson"
    },
    {
        "Sale ID": "13595361-e26f-4855-8899-d989d3614354",
        "Product ID": "06815f2e-a509-4065-866f-c271d3dc1c87",
        "Customer ID": "b6926c73-7735-4a2e-8dcd-035e52a321ae",
        "Sale Date": "2024-03-28",
        "Quantity": 9,
        "Unit Price": 790.05,
        "Total Price": 2801.43,
        "Payment Method": "Bank Transfer",
        "Discount": 0.1,
        "Salesperson": "Michelle Barber"
    }
]

const salesDataColumns = ["Product ID", "Sale Date", "Quantity", "Unit Price", "Total Price", "Payment Method", "Discount", "Salesperson"];

const barChartData = {
    labels : ["Bamboo Watch", "Black Watch", "Blue Band", "Blue T-shirt", "Bracelet", "Brown Purse"],
    datasets: [
        {
            label: "Sales by Product",
            data: [20, 40, 30, 60, 30, 10],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgb(255, 159, 64)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
        }
    ]
}

const pieChartDataFunction = () => {
    let payPalCount = 0;
    let bankTransferCount = 0;
    let creditCardCount = 0;
    
    salesData.forEach((sale, index) => {
        if(sale["Payment Method"] === "PayPal") {
            payPalCount+=1;
        }
        else if(sale["Payment Method"] === "Bank Transfer") {
            bankTransferCount+=1;
        }
        else if(sale["Payment Method"] === "Credit Card") {
            creditCardCount+=1;
        }
    })

    let pieChartCategories = [payPalCount, bankTransferCount, creditCardCount];

    const pieChartData = {
        labels: ["PayPal", "Bank Transfer", "Credit Card"],
        datasets: [
            { 
                backgroundColor: [
                    "rgb(174, 174, 254)",
                    "rgb(147, 147, 250)",
                    "rgb(80, 80, 246)"
                ],
                data: pieChartCategories,
            }
        ]
    }

    return pieChartData;
}

const pieChartData = pieChartDataFunction();

const productsData = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
]


export { salesData, barChartData, pieChartData, salesDataColumns, productsData }