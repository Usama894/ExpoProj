import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import sheikh from '../my_proj/assets/sheikh.jpg'; // Import the image


export default function App() {
  return (
    <LinearGradient
      colors={['#FF8C00', '#FFFFFF']} // Dark orange to white gradient
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={styles.circleTextTop}>Penny</Text>
          <Text style={styles.circleTextBottom}>Appeal</Text>
        </View>
        <View style={styles.searchBar}>
          <Text style={styles.nametext}>Salam, Ahmed</Text>
          <Ionicons name="search" size={25} color="white" />
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressSegment, styles.progressGreen]} />
          <View style={[styles.progressSegment, styles.progressWhite]} />
          <View style={[styles.progressSegment, styles.progressGrey]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.progressLabel}>$450</Text>
          <Text style={styles.progressLabel}>2024 donation goal</Text>
          <Text style={styles.progressLabel}>$1,000</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridText}>Round Up</Text>
            <Text style={styles.gridSubText}>$25 Round Up Last Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridText}>Quick Donate</Text>
            <Text style={styles.gridSubText}>5 Days Since Last Donation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridText}>Akhirah Portfolio</Text>
            <Text style={styles.gridSubText}>5 Campaigns Supported</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridText}>Auto Donate</Text>
            <Text style={styles.gridSubText}>Next Donation: Palestine Relief</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calculatorsContainer}>
          <TouchableOpacity style={styles.calculatorItem}>
            <Text style={styles.calculatorText}>Zakat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculatorItem}>
            <Text style={styles.calculatorText}>Fidya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculatorItem}>
            <Text style={styles.calculatorText}>Kaffarah</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Response</Text>
          <Image source={sheikh} style={styles.sectionImage} />
    
          <Text style={styles.sectionText}>Donate for Pakistan Flood</Text>
          <Text style={styles.sectionSubText}>250 Donors</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Causes</Text>
          <Image source={sheikh} style={styles.sectionImage} />
          <Text style={styles.sectionText}>Winter Relief For Yemen, Libya, Pakes...</Text>
          <Text style={styles.sectionSubText}>250 Donors</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Events</Text>
          <Image source={sheikh} style={styles.sectionImage} />
         
          <Text style={styles.sectionText}>Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton</Text>
        </View>

        <View style={styles.faqContainer}>
          <Text style={styles.faqText}>Frequently Asked Questions</Text>
        </View>

        <View style={styles.volunteerContainer}>
          <Text style={styles.volunteerText}>Volunteer with us</Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  circle: {
    width: 150,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Add position: 'absolute' to position the circle independently
    top: -10, // Adjust the top position to move the circle more to the top
    left: -20, // Adjust the left position to move the circle more to the left
  },
  
  circleTextTop: {
    color: '#FF8C00',
    textAlign: 'center',
  },
  circleTextBottom: {
    color: '#FF8C00',
    textAlign: 'center',
    marginTop: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  nametext: {
    fontSize: 20,
    color: '#ffffff',
    marginRight: 10,
  },
  progressBarContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: "15%",
  },
  progressBar: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
  },
  progressSegment: {
    height: '100%',
  },
  progressGreen: {
    width: '50%',
    backgroundColor: 'green',
  },
  progressWhite: {
    width: '20%',
    backgroundColor: 'white',
  },
  progressGrey: {
    width: '30%',
    backgroundColor: 'grey',
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#000',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: '48%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF8C00',
    marginBottom: 10,
  },
  gridText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gridSubText: {
    color: '#fff',
    fontSize: 12,
  },
  calculatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  calculatorItem: {
    width: '32%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  calculatorText: {
    color: '#FF8C00',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionSubText: {
    fontSize: 14,
    color: '#888',
  },
  faqContainer: {
    backgroundColor: '#FF8C00',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  faqText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  volunteerContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  volunteerText: {
    color: '#FF8C00',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
