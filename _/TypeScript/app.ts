const itemWrapper = document.getElementById('grid');

const grid = document.createElement('div');
var gridAreaTemplate : string = "";
grid.setAttribute("class","grid-container");

var layoutTemplate :string [];
var currentRow : number;

var layoutShowMode : ShowMode;


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
enum BarrierTypes{
    Cross,
    Joint,
    Line,
    LineOutline
}
enum Directions{
    Top,
    Bottom,
    Right,
    Left
}
enum ShowMode{
    Covers,
    Total,
    Time,
    Reservations,
}
//------ Types --------------------
type LayoutItem = {
    ItemType: ItemTypes,
    ItemIndex: string,
    ItemWidth: number,
    ItemHeight:number, 
    ItemPosition:{x:number,y:number},
    BarrierObj?:{
        BarrierType:BarrierTypes,
        Direction: Directions
    },
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
            TableNumber:23,
            TableShape: TableShapes.Circle,
            TableState:TableStates.Available,
            TableSize :TableSizes.Medium
        }
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B1" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:2,y:0},
        BarrierObj:{
            BarrierType:BarrierTypes.LineOutline,
            Direction: Directions.Top
        },
    },
    
    {ItemType : ItemTypes.Table ,ItemIndex: "X2", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:0},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:24,
            TableShape: TableShapes.Square,
            TableState:TableStates.Booked,
            TableSize :TableSizes.Small
        }
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X3", ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:0},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:25,
            TableShape: TableShapes.Circle,
            TableState:TableStates.Cleaning,
            TableSize :TableSizes.Small
        }
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X4", ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:0},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:26,
            TableShape: TableShapes.Circle,
            TableState:TableStates.CourseDelayed,
            TableSize :TableSizes.Small
        }
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B2" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:2,y:1},
        BarrierObj:{
            BarrierType:BarrierTypes.Line,
            Direction: Directions.Top
        },
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X5" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:1},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:27,
            TableShape: TableShapes.Circle,
            TableState:TableStates.ItemsReadyInKitchen,
            TableSize :TableSizes.Small
        }     
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X6" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:1},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:28,
            TableShape: TableShapes.Circle,
            TableState:TableStates.KDSBumpedPrinted,
            TableSize :TableSizes.Small
        }     
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X7" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:1},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:29,
            TableShape: TableShapes.Circle,
            TableState:TableStates.Occupied,
            TableSize :TableSizes.Small
        }     
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X15" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:0,y:2},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:34,
            TableShape: TableShapes.Circle,
            TableState:TableStates.ItemsReadyInKitchen,
            TableSize :TableSizes.Small
        }  
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B3" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:1,y:2},
        BarrierObj:{
            BarrierType:BarrierTypes.LineOutline,
            Direction: Directions.Left
        },
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B4" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:2,y:2},
        BarrierObj:{
            BarrierType:BarrierTypes.Cross,
            Direction: Directions.Bottom
        },
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B5" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:2},
        BarrierObj:{
            BarrierType:BarrierTypes.Line,
            Direction: Directions.Left
        },
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B8" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:4,y:2},
        BarrierObj:{
            BarrierType:BarrierTypes.Line,
            Direction: Directions.Left
        },
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B6" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:5,y:2},
        BarrierObj:{
            BarrierType:BarrierTypes.LineOutline,
            Direction: Directions.Right
        },
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X9", ItemHeight:1,ItemWidth:2, ItemPosition:{x:0,y:3},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:30,
            TableShape: TableShapes.Rectangle,
            TableState:TableStates.Paid,
            TableSize :TableSizes.Small
        }
    },
    {ItemType : ItemTypes.Barrier ,ItemIndex: "B7" , ItemHeight:1,ItemWidth:1, ItemPosition:{x:2,y:3},
        BarrierObj:{
            BarrierType:BarrierTypes.LineOutline,
            Direction: Directions.Bottom
        },
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X11", ItemHeight:1,ItemWidth:1, ItemPosition:{x:3,y:3},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:32,
            TableShape: TableShapes.Circle,
            TableState:TableStates.Available,
            TableSize :TableSizes.Small
        }
    },
    {ItemType : ItemTypes.Table ,ItemIndex: "X12", ItemHeight:1,ItemWidth:2, ItemPosition:{x:4,y:3},
        TableObj : {
            NoOfCustomers : 5,
            ReservationDateTime : new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber:33,
            TableShape: TableShapes.Rectangle,
            TableState:TableStates.Available,
            TableSize :TableSizes.Small
        }
    },

    {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X13" , ItemHeight:1,ItemWidth:6, ItemPosition:{x:0,y:4}
    },
    {ItemType : ItemTypes.FreeSpace ,ItemIndex: "X14" , ItemHeight:1,ItemWidth:6, ItemPosition:{x:0,y:5}
    },
];
function WitchShowMode(): void{
    console.log("layoutShowMode",layoutShowMode);
    grid.innerHTML = ""; 
    if(layoutShowMode == ShowMode.Reservations){
        layoutShowMode = ShowMode.Covers;
    }else{
        layoutShowMode = ShowMode.Reservations;
    }
   GenerateLayout();
}
function GenerateLayout() : void{
    grid.innerHTML = ""; 
    console.log("Begin Generation");
    if(layoutShowMode == undefined){
        layoutShowMode = ShowMode.Covers;
    }
    layoutTemplate = [];
    layout.forEach(renderLayout);
    itemWrapper?.append(grid);
    
    for(let x =0; x < layoutTemplate.length; x++){
        gridAreaTemplate = gridAreaTemplate + "'" + layoutTemplate[x] + "'";
    }
    console.log("gridAreaTemplate",gridAreaTemplate);

    grid.style.gridTemplateAreas = gridAreaTemplate;
    
}

function renderLayout(item : LayoutItem , index:number):void{
    console.log("item",item);
    console.log("index",index);
    let htmlItem = document.createElement('div');
    htmlItem.setAttribute("class",generateItemClass(item));
    htmlItem.style.gridArea = item.ItemIndex;

    let BaseItem = document.createElement('div');
    BaseItem.setAttribute("class",'item-base');
    htmlItem.appendChild(BaseItem);

    let ItemContent = document.createElement('div');
    ItemContent.setAttribute("class",'item-content');
    BaseItem.appendChild(ItemContent);

    if(item.ItemType == ItemTypes.Table){         
        //---- add Image ------
        let ItemImage = document.createElement('img');
        ItemImage.setAttribute("src",getImageUrl(item));
        ItemContent.append(ItemImage); 
        //---- add Table Number------
        let TableNumber = document.createElement('p');
        TableNumber.textContent = item.TableObj?.TableNumber != undefined ? item.TableObj?.TableNumber.toString():"X";
        TableNumber.setAttribute("class","table-number");
        ItemContent.append(TableNumber);

        //---- add Badge ------
        let Badge = document.createElement('span');
        if(layoutShowMode == ShowMode.Reservations){
            Badge.textContent = item.TableObj?.ReservationName != undefined ? item.TableObj?.ReservationName.toString().slice(0, 2) : "";
        }else{
            Badge.textContent = item.TableObj?.NoOfCustomers != undefined ? item.TableObj?.NoOfCustomers.toString() : "";
        }       
        Badge.setAttribute("class","badge");
        ItemContent.append(Badge); 
    }else if(item.ItemType == ItemTypes.Barrier){
        //---- add Image ------
        let ItemImage = document.createElement('img');
        ItemImage.setAttribute("src",getImageUrl(item))
        ItemContent.append(ItemImage); 
        
    }else{
      
        /* let ItemImage = document.createElement('img');
        ItemImage.setAttribute("src","./images/table.png")
        ItemContent.append(ItemImage);  */
    }  

    updateGridLayoutTemplate(item);
    grid?.appendChild(htmlItem);
}

function getImageUrl(Item : LayoutItem): string{
    let imgUrl : string = "";
    switch(Item.ItemType) {
        case ItemTypes.Barrier: {
            switch(Item.BarrierObj?.BarrierType) {
                case BarrierTypes.Cross:
                    imgUrl += "./images/Cross.png";
                break;
                case BarrierTypes.Joint:
                    switch(Item.BarrierObj?.Direction){
                        case Directions.Bottom:
                            imgUrl += "./images/Joint-bottom.png";
                            break;
                        case Directions.Top:
                            imgUrl += "./images/Joint-top.png";
                            break;
                        case Directions.Left:
                            imgUrl += "./images/Joint-left.png";
                            break;
                        case Directions.Right:
                            imgUrl += "./images/Joint-right.png";
                            break;
                    }
                break;
                case BarrierTypes.Line:
                    switch(Item.BarrierObj?.Direction){
                        case Directions.Bottom:
                            imgUrl += "./images/Line-v.png";
                            break;
                        case Directions.Top:
                            imgUrl += "./images/Line-v.png";
                            break;
                        case Directions.Left:
                            imgUrl += "./images/Line-h.png";
                            break;
                        case Directions.Right:
                            imgUrl += "./images/Line-h.png";
                            break;
                    }
                break;
                case BarrierTypes.LineOutline:
                    switch(Item.BarrierObj?.Direction){
                        case Directions.Bottom:
                            imgUrl += "./images/LineOutline-bottom.png";
                            break;
                        case Directions.Top:
                            imgUrl += "./images/LineOutline-top.png";
                            break;
                        case Directions.Left:
                            imgUrl += "./images/LineOutline-left.png";
                            break;
                        case Directions.Right:
                            imgUrl += "./images/LineOutline-right.png";
                            break;
                    }
                break;
            }
        }
        break;
        case ItemTypes.Table: {
            switch(Item.TableObj?.TableShape) {
                case TableShapes.Circle:{
                    switch(Item.TableObj?.TableSize) {
                        case TableSizes.Small:
                            imgUrl += "./images/Circle-s.png";
                        break;
                        case TableSizes.Medium:
                            imgUrl += "./images/Circle-m.png";
                        break;
                        case TableSizes.Large:
                            imgUrl += "./images/Circle-m.png";
                        break;
                    }
                    break;
                }
                case TableShapes.Rectangle:{
                    switch(Item.TableObj?.TableSize) {
                        case TableSizes.Small:
                            imgUrl += "./images/rectangle-s.png";
                        break;
                            case TableSizes.Medium:
                            imgUrl += "./images/rectangle-s.png";
                        break;
                        case TableSizes.Large:
                            imgUrl += "./images/rectangle-s.png";
                        break;
                    }
                    break;
                }
                case TableShapes.Square:{
                    switch(Item.TableObj?.TableSize) {
                        case TableSizes.Small:
                            imgUrl += "./images/square-s.png";
                        break;
                        case TableSizes.Medium:
                            imgUrl += "./images/square-s.png";
                        break;
                        case TableSizes.Large:
                            imgUrl += "./images/square-s.png";
                        break;
                    }
                    break;
                }
            }
        }
        break;
    }
    return imgUrl;
}

function generateItemClass(Item : LayoutItem): string{
    let genClass : string = "";
    switch(Item.ItemType) {
        case ItemTypes.Table:
            genClass = "grid-item ";
            switch(Item.TableObj?.TableState){
                case TableStates.Available:
                    genClass += "stat-available";
                    break;
                case TableStates.Booked:
                    genClass += "stat-booked";
                    break;
                case TableStates.Occupied:
                    genClass += "stat-occupied";
                    break;
                case TableStates.CourseDelayed:
                    genClass += "stat-course-delayed";
                    break;
                case TableStates.ItemsReadyInKitchen:
                    genClass += "stat-items-ready-in-kitchen";
                    break;
                case TableStates.KDSBumpedPrinted:
                    genClass += "stat-kds-bumped-printed";
                    break;
                case TableStates.Paid:
                    genClass += "stat-paid";
                    break;
                case TableStates.Cleaning:
                    genClass += "stat-cleaning";
                    break;
            }
            switch(Item.TableObj?.TableSize) {
                case TableSizes.Small:
                    genClass += " size-sm";
                break;
                    case TableSizes.Medium:
                    genClass += " size-md";
                break;
                case TableSizes.Large:
                    genClass += " size-lg";
                break;
            }
          break;
        case ItemTypes.Barrier:
            genClass = "grid-item barrier";
            break;
        case ItemTypes.FreeSpace:
            genClass = "grid-item free-space";
            break; 
        default:
            genClass = "grid-item";
    }
    if(Item.ItemType == ItemTypes.Table){
        switch(layoutShowMode) {
            case ShowMode.Reservations:
                genClass  += Item.TableObj?.ReservationName != undefined ? " has-badge res-badge" : "";
            break;
            default:
                genClass += Item.TableObj?.NoOfCustomers != 0 ? " has-badge" : "";
        }
    }
    return genClass;
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