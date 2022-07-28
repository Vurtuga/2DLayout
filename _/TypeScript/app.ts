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
    /* ItemWidth: number,
    ItemHeight:number, */
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
            {ItemType : ItemTypes.Barrier},
            {ItemType : ItemTypes.FreeSpace}
        ],
        [
            {ItemType : ItemTypes.Table ,
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
            {ItemType : ItemTypes.Barrier},
            {ItemType : ItemTypes.FreeSpace}
        ]
    ];
    layout.forEach(renderRow);
    console.log(layout);
}

function renderRow(row: LayoutItem[]){
    console.log(row);

}