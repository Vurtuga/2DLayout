const itemWrapper = document.getElementById('grid');

const grid = document.createElement('div');
var gridAreaTemplate : string = "";
grid.setAttribute("class","grid-container");

var layoutTemplate :string [][];

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
type LayoutItem = {
    ItemType: ItemTypes,
    ItemIndex: string,
     ItemWidth: number,
    ItemHeight:number, 
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
function GenerateLayout(){
    console.log("Begin Generation");
    const layout : LayoutItem [][] =[
        [
            {ItemType : ItemTypes.Table ,
             ItemHeight:2,
             ItemWidth:2,
             ItemIndex: "X00",
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
            {ItemType : ItemTypes.Barrier ,ItemIndex: "X01" , ItemHeight:1,ItemWidth:1},
            {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X02", ItemHeight:1,ItemWidth:1}
        ],
         [
            {ItemType : ItemTypes.Skip ,ItemIndex: "X10" , ItemHeight:1,ItemWidth:2},
            {ItemType : ItemTypes.Barrier ,ItemIndex: "X11", ItemHeight:1,ItemWidth:1},
            {ItemType : ItemTypes.Table ,ItemIndex: "X12" , ItemHeight:1,ItemWidth:1,
                TableObj : {
                    NoOfCustomers : 5,
                    ReservationDateTime : new Date(),
                    ReservationName: "Mohamed Khalifa",
                    TableNumber:1,
                    TableShape: TableShapes.Circle,
                    TableState:TableStates.Available,
                    TableSize :TableSizes.Small
                }
            }
        ],
        [
            {ItemType : ItemTypes.Skip ,ItemIndex: "X20" , ItemHeight:1,ItemWidth:2},
            {ItemType : ItemTypes.Barrier ,ItemIndex: "X21", ItemHeight:1,ItemWidth:1},
            {ItemType : ItemTypes.Skip ,ItemIndex: "X22" , ItemHeight:1,ItemWidth:2},
        ]
    ];
    layout.forEach(renderRow);
    console.log(layout);
    itemWrapper?.append(grid);

    console.log("gridAreaTemplate",gridAreaTemplate);

    grid.style.gridTemplateAreas = gridAreaTemplate;
    
}



function renderRow(row: LayoutItem[],index: number){
    console.log(index);
    let rowTemplate ="";
    
   // let self = this;
    row.forEach(function(item){
        if(item.ItemType == ItemTypes.Table){         
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item table");
            for(let i=0; i < item.ItemWidth ; i ++){
             //   that.ind
            }
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ")
            grid?.appendChild(htmlItem);
        }else if(item.ItemType == ItemTypes.Barrier){
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item barrier");
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ");  
            grid?.appendChild(htmlItem);
        }else{
            let htmlItem = document.createElement('div');
            htmlItem.setAttribute("class","grid-item free-space");
            htmlItem.style.gridArea = item.ItemIndex;
            rowTemplate = rowTemplate.concat(item.ItemIndex," ")
            grid?.appendChild(htmlItem);
        }    
    });
   
    
    gridAreaTemplate = gridAreaTemplate.concat("'",rowTemplate ,"'");
   
    
}