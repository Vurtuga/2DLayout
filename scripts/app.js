"use strict";
const itemWrapper = document.getElementById('grid');
const grid = document.createElement('div');
var gridAreaTemplate = "";
grid.setAttribute("class", "grid-container");
var layoutTemplate;
var currentRow;
var layoutShowMode;
var TableStates;
(function (TableStates) {
    TableStates[TableStates["Available"] = 0] = "Available";
    TableStates[TableStates["Booked"] = 1] = "Booked";
    TableStates[TableStates["Occupied"] = 2] = "Occupied";
    TableStates[TableStates["CourseDelayed"] = 3] = "CourseDelayed";
    TableStates[TableStates["ItemsReadyInKitchen"] = 4] = "ItemsReadyInKitchen";
    TableStates[TableStates["KDSBumpedPrinted"] = 5] = "KDSBumpedPrinted";
    TableStates[TableStates["Paid"] = 6] = "Paid";
    TableStates[TableStates["Cleaning"] = 7] = "Cleaning";
})(TableStates || (TableStates = {}));
var ItemTypes;
(function (ItemTypes) {
    ItemTypes[ItemTypes["Skip"] = 0] = "Skip";
    ItemTypes[ItemTypes["FreeSpace"] = 1] = "FreeSpace";
    ItemTypes[ItemTypes["Table"] = 2] = "Table";
    ItemTypes[ItemTypes["Barrier"] = 3] = "Barrier";
})(ItemTypes || (ItemTypes = {}));
var TableSizes;
(function (TableSizes) {
    TableSizes[TableSizes["Small"] = 0] = "Small";
    TableSizes[TableSizes["Medium"] = 1] = "Medium";
    TableSizes[TableSizes["Large"] = 2] = "Large";
})(TableSizes || (TableSizes = {}));
var TableShapes;
(function (TableShapes) {
    TableShapes[TableShapes["Square"] = 0] = "Square";
    TableShapes[TableShapes["Rectangle"] = 1] = "Rectangle";
    TableShapes[TableShapes["Circle"] = 2] = "Circle";
    TableShapes[TableShapes["Oval"] = 3] = "Oval";
    TableShapes[TableShapes["Triangle"] = 4] = "Triangle";
    TableShapes[TableShapes["Octagon"] = 5] = "Octagon";
    TableShapes[TableShapes["Diamond"] = 6] = "Diamond";
})(TableShapes || (TableShapes = {}));
var BarrierTypes;
(function (BarrierTypes) {
    BarrierTypes[BarrierTypes["Cross"] = 0] = "Cross";
    BarrierTypes[BarrierTypes["Joint"] = 1] = "Joint";
    BarrierTypes[BarrierTypes["Line"] = 2] = "Line";
    BarrierTypes[BarrierTypes["LineOutline"] = 3] = "LineOutline";
})(BarrierTypes || (BarrierTypes = {}));
var Directions;
(function (Directions) {
    Directions[Directions["Top"] = 0] = "Top";
    Directions[Directions["Bottom"] = 1] = "Bottom";
    Directions[Directions["Right"] = 2] = "Right";
    Directions[Directions["Left"] = 3] = "Left";
})(Directions || (Directions = {}));
var ShowMode;
(function (ShowMode) {
    ShowMode[ShowMode["Covers"] = 0] = "Covers";
    ShowMode[ShowMode["Total"] = 1] = "Total";
    ShowMode[ShowMode["Time"] = 2] = "Time";
    ShowMode[ShowMode["Reservations"] = 3] = "Reservations";
})(ShowMode || (ShowMode = {}));
const layout = [
    { ItemType: ItemTypes.Table, ItemHeight: 2, ItemWidth: 2, ItemIndex: "X0", ItemPosition: { x: 0, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 23,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Medium
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B1", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 2, y: 0 },
        BarrierObj: {
            BarrierType: BarrierTypes.LineOutline,
            Direction: Directions.Top
        },
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X2", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 24,
            TableShape: TableShapes.Square,
            TableState: TableStates.Booked,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X3", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 25,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Cleaning,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X4", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 0 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 26,
            TableShape: TableShapes.Circle,
            TableState: TableStates.CourseDelayed,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B2", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 2, y: 1 },
        BarrierObj: {
            BarrierType: BarrierTypes.Line,
            Direction: Directions.Top
        },
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X5", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 27,
            TableShape: TableShapes.Circle,
            TableState: TableStates.ItemsReadyInKitchen,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X6", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 28,
            TableShape: TableShapes.Circle,
            TableState: TableStates.KDSBumpedPrinted,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X7", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 1 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 29,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Occupied,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X15", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 0, y: 2 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 34,
            TableShape: TableShapes.Circle,
            TableState: TableStates.ItemsReadyInKitchen,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B3", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 1, y: 2 },
        BarrierObj: {
            BarrierType: BarrierTypes.LineOutline,
            Direction: Directions.Left
        },
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B4", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 2, y: 2 },
        BarrierObj: {
            BarrierType: BarrierTypes.Cross,
            Direction: Directions.Bottom
        },
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B5", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 2 },
        BarrierObj: {
            BarrierType: BarrierTypes.Line,
            Direction: Directions.Left
        },
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B8", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 4, y: 2 },
        BarrierObj: {
            BarrierType: BarrierTypes.Line,
            Direction: Directions.Left
        },
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B6", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 5, y: 2 },
        BarrierObj: {
            BarrierType: BarrierTypes.LineOutline,
            Direction: Directions.Right
        },
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X9", ItemHeight: 1, ItemWidth: 2, ItemPosition: { x: 0, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 30,
            TableShape: TableShapes.Rectangle,
            TableState: TableStates.Paid,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Barrier, ItemIndex: "B7", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 2, y: 3 },
        BarrierObj: {
            BarrierType: BarrierTypes.LineOutline,
            Direction: Directions.Bottom
        },
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X11", ItemHeight: 1, ItemWidth: 1, ItemPosition: { x: 3, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 32,
            TableShape: TableShapes.Circle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.Table, ItemIndex: "X12", ItemHeight: 1, ItemWidth: 2, ItemPosition: { x: 4, y: 3 },
        TableObj: {
            NoOfCustomers: 5,
            ReservationDateTime: new Date(),
            ReservationName: "Mohamed Khalifa",
            TableNumber: 33,
            TableShape: TableShapes.Rectangle,
            TableState: TableStates.Available,
            TableSize: TableSizes.Small
        }
    },
    { ItemType: ItemTypes.FreeSpace, ItemIndex: "X13", ItemHeight: 1, ItemWidth: 6, ItemPosition: { x: 0, y: 4 }
    },
    { ItemType: ItemTypes.FreeSpace, ItemIndex: "X14", ItemHeight: 1, ItemWidth: 6, ItemPosition: { x: 0, y: 5 }
    },
];
function WitchShowMode() {
    console.log("layoutShowMode", layoutShowMode);
    grid.innerHTML = "";
    if (layoutShowMode == ShowMode.Reservations) {
        layoutShowMode = ShowMode.Covers;
    }
    else {
        layoutShowMode = ShowMode.Reservations;
    }
    GenerateLayout();
}
function GenerateLayout() {
    grid.innerHTML = "";
    console.log("Begin Generation");
    if (layoutShowMode == undefined) {
        layoutShowMode = ShowMode.Covers;
    }
    layoutTemplate = [];
    layout.forEach(renderLayout);
    itemWrapper === null || itemWrapper === void 0 ? void 0 : itemWrapper.append(grid);
    for (let x = 0; x < layoutTemplate.length; x++) {
        gridAreaTemplate = gridAreaTemplate + "'" + layoutTemplate[x] + "'";
    }
    console.log("gridAreaTemplate", gridAreaTemplate);
    grid.style.gridTemplateAreas = gridAreaTemplate;
}
function renderLayout(item, index) {
    var _a, _b, _c, _d, _e, _f;
    console.log("item", item);
    console.log("index", index);
    let htmlItem = document.createElement('div');
    htmlItem.setAttribute("class", generateItemClass(item));
    htmlItem.style.gridArea = item.ItemIndex;
    let BaseItem = document.createElement('div');
    BaseItem.setAttribute("class", 'item-base');
    htmlItem.appendChild(BaseItem);
    let ItemContent = document.createElement('div');
    ItemContent.setAttribute("class", 'item-content');
    BaseItem.appendChild(ItemContent);
    if (item.ItemType == ItemTypes.Table) {
        let ItemImage = document.createElement('img');
        ItemImage.setAttribute("src", getImageUrl(item));
        ItemContent.append(ItemImage);
        let TableNumber = document.createElement('p');
        TableNumber.textContent = ((_a = item.TableObj) === null || _a === void 0 ? void 0 : _a.TableNumber) != undefined ? (_b = item.TableObj) === null || _b === void 0 ? void 0 : _b.TableNumber.toString() : "X";
        TableNumber.setAttribute("class", "table-number");
        ItemContent.append(TableNumber);
        let Badge = document.createElement('span');
        if (layoutShowMode == ShowMode.Reservations) {
            Badge.textContent = ((_c = item.TableObj) === null || _c === void 0 ? void 0 : _c.ReservationName) != undefined ? (_d = item.TableObj) === null || _d === void 0 ? void 0 : _d.ReservationName.toString().slice(0, 2) : "";
        }
        else {
            Badge.textContent = ((_e = item.TableObj) === null || _e === void 0 ? void 0 : _e.NoOfCustomers) != undefined ? (_f = item.TableObj) === null || _f === void 0 ? void 0 : _f.NoOfCustomers.toString() : "";
        }
        Badge.setAttribute("class", "badge");
        ItemContent.append(Badge);
    }
    else if (item.ItemType == ItemTypes.Barrier) {
        let ItemImage = document.createElement('img');
        ItemImage.setAttribute("src", getImageUrl(item));
        ItemContent.append(ItemImage);
    }
    else {
    }
    updateGridLayoutTemplate(item);
    grid === null || grid === void 0 ? void 0 : grid.appendChild(htmlItem);
}
function getImageUrl(Item) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let imgUrl = "";
    switch (Item.ItemType) {
        case ItemTypes.Barrier:
            {
                switch ((_a = Item.BarrierObj) === null || _a === void 0 ? void 0 : _a.BarrierType) {
                    case BarrierTypes.Cross:
                        imgUrl += "./images/Cross.png";
                        break;
                    case BarrierTypes.Joint:
                        switch ((_b = Item.BarrierObj) === null || _b === void 0 ? void 0 : _b.Direction) {
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
                        switch ((_c = Item.BarrierObj) === null || _c === void 0 ? void 0 : _c.Direction) {
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
                        switch ((_d = Item.BarrierObj) === null || _d === void 0 ? void 0 : _d.Direction) {
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
        case ItemTypes.Table:
            {
                switch ((_e = Item.TableObj) === null || _e === void 0 ? void 0 : _e.TableShape) {
                    case TableShapes.Circle: {
                        switch ((_f = Item.TableObj) === null || _f === void 0 ? void 0 : _f.TableSize) {
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
                    case TableShapes.Rectangle: {
                        switch ((_g = Item.TableObj) === null || _g === void 0 ? void 0 : _g.TableSize) {
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
                    case TableShapes.Square: {
                        switch ((_h = Item.TableObj) === null || _h === void 0 ? void 0 : _h.TableSize) {
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
function generateItemClass(Item) {
    var _a, _b, _c, _d;
    let genClass = "";
    switch (Item.ItemType) {
        case ItemTypes.Table:
            genClass = "grid-item ";
            switch ((_a = Item.TableObj) === null || _a === void 0 ? void 0 : _a.TableState) {
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
            switch ((_b = Item.TableObj) === null || _b === void 0 ? void 0 : _b.TableSize) {
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
    if (Item.ItemType == ItemTypes.Table) {
        switch (layoutShowMode) {
            case ShowMode.Reservations:
                genClass += ((_c = Item.TableObj) === null || _c === void 0 ? void 0 : _c.ReservationName) != undefined ? " has-badge res-badge" : "";
                break;
            default:
                genClass += ((_d = Item.TableObj) === null || _d === void 0 ? void 0 : _d.NoOfCustomers) != 0 ? " has-badge" : "";
        }
    }
    return genClass;
}
function updateGridLayoutTemplate(Item) {
    for (let i = 0; i < Item.ItemWidth; i++) {
        for (let j = 0; j < Item.ItemHeight; j++) {
            if (layoutTemplate[Item.ItemPosition.y + j] == undefined) {
                layoutTemplate[Item.ItemPosition.y + j] = "";
            }
            layoutTemplate[Item.ItemPosition.y + j] = layoutTemplate[Item.ItemPosition.y + j].concat(Item.ItemIndex, " ");
        }
    }
    console.log("layoutTemplate", layoutTemplate);
}
