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
    
        {ItemType : ItemTypes.Table , ItemHeight:2, ItemWidth:2, ItemIndex: "X00", ItemPosition:{x:0,y:0},
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
        {ItemType : ItemTypes.Barrier ,ItemIndex: "X01" , ItemHeight:2,ItemWidth:1, ItemPosition:{x:2,y:0}
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X02", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:0},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X03", ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:0},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X04", ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:0},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X13" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:1},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X14" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:1},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X15" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:1},
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
        {ItemType : ItemTypes.Barrier ,ItemIndex: "X20" , ItemHeight:1,ItemWidth:6, ItemPosition:{x:0,y:2}
        },
        {ItemType : ItemTypes.Table ,ItemIndex: "X30", ItemHeight:1,ItemWidth:3, ItemPosition:{x:0,y:3},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X33", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:3},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X34", ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:3},
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
        {ItemType : ItemTypes.Table ,ItemIndex: "X35", ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:3},
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
];

function GenerateLayout(){
    console.log("Begin Generation");
    layoutTemplate = [];
   /*  layout.forEach(renderTables);
    console.log(layout); */
    layout.forEach(renderLayout);
    itemWrapper?.append(grid);

    console.log("gridAreaTemplate",gridAreaTemplate);

    //gridAreaTemplate = generateGridLayoutTemplate(layout);
    grid.style.gridTemplateAreas = gridAreaTemplate;
    
}

function renderLayout(item : LayoutItem , index:number):void{
    console.log("item",item);
    console.log("index",index);

    if(item.ItemType == ItemTypes.Table){         
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item table");
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }else if(item.ItemType == ItemTypes.Barrier){
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item barrier");
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }else{
        let htmlItem = document.createElement('div');
        htmlItem.setAttribute("class","grid-item free-space");
        updateGridLayoutTemplate(item);
        grid?.appendChild(htmlItem);
    }  
}

function renderRow(row: LayoutItem[],index: number): void{
    console.log(index);
    //let rowTemplate ="";
    //currentRow = index;
   // let self = this;
    row.forEach(function(item){
        if(item.ItemType == ItemTypes.Table){         
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item table");
            updateGridLayoutTemplate(item);
            /* htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ") */
            grid?.appendChild(htmlItem);
        }else if(item.ItemType == ItemTypes.Barrier){
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item barrier");
            updateGridLayoutTemplate(item);
            /* htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ");   */
            grid?.appendChild(htmlItem);
        }else{
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item free-space");
            updateGridLayoutTemplate(item);
            /* htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ") */
            grid?.appendChild(htmlItem);
        }    
    });
   
    
    //gridAreaTemplate = gridAreaTemplate.concat("'",rowTemplate ,"'");
   
    
}

function updateGridLayoutTemplate(Item : LayoutItem): void{
    
    for(let i = 0; i < Item.ItemWidth ;i++){
        if(layoutTemplate[Item.ItemPosition.x] == undefined) {layoutTemplate[Item.ItemPosition.x] = ""}
        layoutTemplate[Item.ItemPosition.x] = layoutTemplate[Item.ItemPosition.x].concat(Item.ItemIndex," "); 
    }
    for(let i = 1; i < Item.ItemHeight ;i++){
        if(layoutTemplate[Item.ItemPosition.y + i] == undefined) {layoutTemplate[Item.ItemPosition.y + i] = ""}
        layoutTemplate[Item.ItemPosition.y + i] = layoutTemplate[Item.ItemPosition.y + i].concat(Item.ItemIndex," "); 
    }
    console.log("layoutTemplate",layoutTemplate);

}