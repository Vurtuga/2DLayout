const itemWrapper = document.getElementById('grid');

const grid = document.createElement('div');
var gridAreaTemplate : string = "";
grid.setAttribute("class","grid-container");

var layoutTemplate :string [];
var currentRow : number;

//------ Enums --------------------
enum TableStates {
    Available,
    Booked,
    Occupied,
    CourseDelayed,
    ItemsReadyInKitchen,
    KDSBumpedPrinted,
    Paid,
    Cleaning
}
enum ItemTypes {
    Skip,
    FreeSpace,
    Table,
    Barrier
}
enum TableSizes {
    Small,
    Medium,
    Large
}
enum TableShapes{
    Square,
    Rectangle,
    Circle,
    Oval,
    Triangle,
    Octagon,
    Diamond
}

//------ Types --------------------
type LayoutItem = {
    ItemType: ItemTypes,
    ItemIndex: string,
    ItemWidth: number,
    ItemHeight:number, 
    ItemPosition:{x:number,y:number},
    TableObj? :{
        TableShape: TableShapes,
        TableState: TableStates,
        TableSize: TableSizes,
        TableNumber: number,
        NoOfCustomers: number,
        ReservationDateTime: Date,
        ReservationName: string,
       /*  NoOfChairs:number, */
    }    
}


const layout : LayoutItem [] =[
    
        {ItemType : ItemTypes.Table , ItemHeight:2, ItemWidth:2, ItemIndex: "X0", ItemPosition:{x:0,y:0},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Barrier ,ItemIndex: "X1" , ItemHeight:2,ItemWidth:1, ItemPosition:{x:2,y:0}
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X2", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:0},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X3", ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:0},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X4", ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:0},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X5" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:1},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }     
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X6" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:1},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }     
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X7" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:1},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }     
        },
        {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X15" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:0,y:2}
        },
        {ItemType : ItemTypes.Barrier ,ItemIndex: "X8" , ItemHeight:1,ItemWidth:5, ItemPosition:{x:1,y:2}
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X9", ItemHeight:1,ItemWidth:3, ItemPosition:{x:0,y:3},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X10", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:3},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X11", ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:3},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X12", ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:3},
            TableObj : {
                NoOfCustomers : 5,
                ReservationDateTime : new Date(),
                ReservationName: "Mohamed Khalifa",
                TableNumber:1,
                TableShape: TableShapes.Circle,
                TableState:TableStates.Available,
                TableSize :TableSizes.Small
            }
        },
        {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X13" , ItemHeight:1,ItemWidth:6, ItemPosition:{x:0,y:4}
        },
        {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X14" , ItemHeight:1,ItemWidth:6, ItemPosition:{x:0,y:5}
        },
];

function GenerateLayout(){
    console.log("Begin Generation");
    layoutTemplate = [];

    layout.forEach(renderLayout);
    itemWrapper?.append(grid);
    
    for(let x =0; x < layoutTemplate.length; x++){
        //gridAreaTemplate.concat(layoutTemplate[x]);
        gridAreaTemplate = gridAreaTemplate + "'" + layoutTemplate[x] + "'";
    }
    console.log("gridAreaTemplate",gridAreaTemplate);

    grid.style.gridTemplateAreas = gridAreaTemplate;
    
}

function renderLayout(item : LayoutItem , index:number):void{
    console.log("item",item);
    console.log("index",index);

    if(item.ItemType == ItemTypes.Table){         
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item table");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }else if(item.ItemType == ItemTypes.Barrier){
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item barrier");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }else{
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item free-space");
        htmlItem.style.gridArea = item.ItemIndex;
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }  
}

function updateGridLayoutTemplate(Item : LayoutItem): void{

    for(let i = 0; i < Item.ItemWidth ;i++){
        for(let j = 0; j < Item.ItemHeight ;j++){
            if(layoutTemplate[Item.ItemPosition.y + j] == undefined) {layoutTemplate[Item.ItemPosition.y + j] = ""}
            layoutTemplate[Item.ItemPosition.y + j] = layoutTemplate[Item.ItemPosition.y + j].concat(Item.ItemIndex," "); 
        }
    }
    

    console.log("layoutTemplate",layoutTemplate);

}