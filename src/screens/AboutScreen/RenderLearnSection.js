import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { getNextTenDays } from "../../utils/utils"
import { hp, wp } from "../../utils/dimensions"
import colorConstant from "../../utils/colorConstant"
import { useState } from "react"
import moment from "moment"

const RenderLearnSection = ({ learnData, }) => {
    const dayDateArray = getNextTenDays('2024-07-17')
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedClassType, setSelectedClassType] = useState(null)
    let resourceType = learnData != null &&
        learnData.resource_types && learnData.resource_types.length > 0 ? learnData.resource_types.map(item => {
            let data = { id: item.id, name: item.name, events: item.events }
            return data
        }).sort((a, b) => a.name - b.name) : null
    console.log('learnData', learnData, resourceType)
    return (<View style={{ flex: 1, }}>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>
            {dayDateArray.map((item, index) => {
                let isSelected = selectedDate === item
                return (<TouchableOpacity key={index} style={{
                    height: hp(5.5), marginRight: 6, paddingHorizontal: 10,
                    backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 100
                }} onPress={() => setSelectedDate(item)}>
                    <Text style={{
                        fontSize: hp(2.5), color: isSelected ? colorConstant.White : colorConstant.Black,
                        fontWeight: '500',
                    }}>{moment(item).format('ddd, D MMMM')}</Text>
                </TouchableOpacity>)
            })}

        </ScrollView>
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: wp(95), alignSelf: 'center', marginTop: hp(2) }}>

            {resourceType != null && resourceType.map((item, index) => {
                console.log('item +++++', item)
                let isSelected = selectedClassType === item.id
                return (<TouchableOpacity key={index} style={{
                    height: hp(5.5), marginRight: 6, paddingHorizontal: 10,
                    backgroundColor: isSelected ? colorConstant.ThemeGreenColor : colorConstant.White, borderWidth: 2, borderColor: colorConstant.ThemeGreenColor,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: wp(46)
                }} onPress={() => setSelectedClassType(item.id)}>
                    <Text style={{
                        fontSize: hp(2.5), color: isSelected ? colorConstant.White : colorConstant.Black, fontWeight: '500',

                    }}>{item.name}</Text>
                </TouchableOpacity>)
            })}
        </ScrollView>
        <View style={{ height: hp(1) }} />
        <FlatList data={selectedClassType != null ? resourceType.filter(k => k.id === selectedClassType)[0].events : []}
            extraData={selectedClassType}
            renderItem={(item) => {
                let data = item.item
                console.log(item)
                return (<View style={{
                    width: wp(95), alignSelf: 'center', backgroundColor: colorConstant.White,
                    borderRadius: 10, paddingHorizontal: 10, paddingVertical: 7,
                    marginVertical: 5,
                    shadowColor: colorConstant.Black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 0,
                    elevation: 5,
                }}>
                    <Text style={{
                        fontSize: hp(2.7),
                        fontWeight: 'bold',
                        color: colorConstant.Black,
                    }}>
                        {data.resource}
                    </Text>
                    <Text style={styles.titleView}>

                        {data.location}
                    </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text>


                            <Text style={styles.titleView}>
                                Coach: {' '}
                            </Text>
                            <Text style={styles.subtitleView}>
                                {data.account_name}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text>


                            <Text style={styles.titleView}>
                                Date: {' '}
                            </Text>
                            <Text style={styles.subtitleView}>
                                {moment(data.start).format('ddd, D MMMM HH:mm')}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 5 }}>
                        <Text>


                            <Text style={styles.titleView}>
                                Description: {' '}
                            </Text>
                            <Text style={styles.subtitleView}>
                                {data.description}
                            </Text>
                        </Text>
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        borderColor: '#999',
                        borderStyle: 'dashed',
                        marginVertical: 16,
                        width: '100%',
                    }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#747474', borderRadius: 5, minWidth: wp(30), height: hp(3.5),
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: hp(2),
                                fontWeight: '500',
                                color: colorConstant.White,
                            }}>
                                Private Class
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: colorConstant.ThemeGreenColor, borderRadius: 100, minWidth: wp(25), height: hp(3.5), paddingHorizontal: 10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: hp(2),
                                fontWeight: '500',
                                color: colorConstant.White,
                            }}>
                                {data.price.display}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>)
            }}
        />



    </View>)
}
export default RenderLearnSection
const styles = StyleSheet.create({
    titleView: {
        fontSize: hp(2),
        fontWeight: '500',
        color: '#6E6E6E',
    },
    subtitleView: {
        fontSize: hp(2),
        fontWeight: '500',
        color: '#989898',
    }

})