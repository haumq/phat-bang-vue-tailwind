<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { useStyleStore } from "@/stores/style";
import { mdiEye, mdiTrashCan, mdiArrowRight, mdiChevronRight, mdiChevronLeft} from "@mdi/js";
import CardBoxModal from "@/components/CardBoxModal.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import ButtonWait from "./ButtonWait.vue";
import ButtonFinish from "./ButtonFinish.vue";
import ButtonTransferToWait from "./ButtonTransferToWait.vue";
import ButtonPropressing from "./ButtonPropressing.vue";
import CardBox from "@/components/CardBox.vue";
import SkeletonTable from "@/components/SkeletonTable.vue";


defineProps({
  checkable: Boolean,

});

const styleStore = useStyleStore();

const mainStore = useMainStore();

const transferToWait =  function(row){
  let payload = { row: row}
  mainStore.transferToWait(payload)
  }

const transferToWaitListRow = computed(() => mainStore.transferToWaitListRow);
const items = computed(() => {
  let students = mainStore.students
  //  let students
  // if( mainStore.dataTo > 0 && mainStore.dataFrom > 0){
  //   students = mainStore.students.filter((item) => item.Row <= mainStore.dataTo && item.Row >= mainStore.dataFrom)
  // }else{
  //   students = mainStore.students
  // }

  students = students.filter(item => item.ThoiGianNhanGDQP != '' );
  return students.sort((a, b) => {
    return new Date(a.ThoiGianNhanGDQP) - new Date(b.ThoiGianNhanGDQP);
    // return b.NgayTao - a.NgayTao;
  })
}
);



const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const isloading = computed(() => mainStore.apiLoading)

const perPage = ref(10);

const currentPage = ref(1)

const prevStep = ref(0)

const nextStep = ref(0)

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * (currentPage.value - 1),
    perPage.value * (currentPage.value)
  )
);
const nextPage = computed(() =>
 currentPage.value < numPages.value ? currentPage.value + 1 : numPages.value
);
const prevPage = computed(() =>
 currentPage.value > 1 ? currentPage.value - 1 : 1
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value) );

const currentPageHuman = computed(() => currentPage.value);

// const pagesList = computed(() => {
//   const pagesList = [];

//   for (let i = 0; i < numPages.value; i++) {
//     pagesList.push(i);
//   }

//   return pagesList;
// });

const pagesList = computed(() => {
  const pagesList = [];
  // let prevStep = 0;
  // let nextStep = 0;

  // for (let i = 0; i < numPages.value; i++) {
  //   pagesList.push(i)
  // }

  if(numPages.value <= 7){
    for (let i = 1; i <= numPages.value; i++) {
    pagesList.push(i);
     }
  }else {
    currentPage.value > 3 ? prevStep.value = 2 : prevStep.value = (currentPage.value - 1);
    currentPage.value < numPages.value - 2 ? nextStep.value = 2 : nextStep.value = (numPages.value - currentPage.value) ;
    // prevStep.value < 0 ? prevStep.value = 0 : prevStep.value = prevStep.value;
    // nextStep.value < 0 ? nextStep.value = 0 : nextStep.value = nextStep.value;
    (nextStep.value = prevStep.value < 2 ? nextStep.value + (2 - prevStep.value) : nextStep.value)
    prevStep.value = nextStep.value < 2 ? prevStep.value + (2 - nextStep.value) : prevStep.value
    // if(currentPage < 4 && numPages.value > 7) {
    //   nextStep.value = currentPage
    // }
    // console.log(prevStep.value);
    // console.log(nextStep.value);


    for (let i = prevStep.value; i > 0; i--) {
    pagesList.push(currentPage.value - i);
     }
    pagesList.push(currentPage.value);

    for (let i = 0; i < nextStep.value; i++) {
    pagesList.push(currentPage.value + i + 1);
     }

  }

  return pagesList
})


const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" large-title="Please confirm" button="danger" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <!-- <th /> -->
        <th>STT</th>
        <th>MSSV</th>
        <th>TÊN <span class="hidden lg:inline"> - NGÀY SINH - NGÀNH</span></th>
        <th class="lg:hidden">NGÀY SINH</th>
        <th class="lg:hidden">NGÀNH</th>
        <th class="whitespace-nowrap">SỐ VÀO SỔ</th>
        <th>GDQP</th>
        <th>Thời gian nhận</th>
        <!-- <th class="whitespace-nowrap">THIẾU HS, HP</th> -->
        <!-- <th>KHẢO SÁT</th> -->
        <!-- <th>LỄ PHỤC</th> -->
        <th class="whitespace-nowrap">TRẠNG THÁI</th>
        <!-- <th /> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in itemsPaginated" :key="student.Row"  >
        <TableCheckboxCell v-if="checkable" @checked="checked($event, student)" />
        <!-- <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar :username="client.HoTen" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
        </td> -->
          <td data-label="STT">
            {{ index + 1 + (currentPage - 1) * perPage }}
          </td>
        <td data-label="MSSV">
          {{ student.MSSV }}
        </td>
        <td data-label="Tên" class="lg:whitespace-nowrap" >
          <p class="font-bold">{{ student.HoTen }}</p>
            <small class="hidden lg:block">{{ new Date(student.NgaySinh).toLocaleDateString() == 'Invalid Date' ? student.NgaySinh : new Date(student.NgaySinh).toLocaleDateString() }}</small>
            <small class="hidden lg:block">{{ student.Nganh }}</small >
        </td>
        <td data-label="Ngày Sinh" class="lg:hidden">
          {{ new Date(student.NgaySinh).toLocaleDateString() == 'Invalid Date' ? student.NgaySinh : new Date(student.NgaySinh).toLocaleDateString() }}
        </td>
        <td data-label="Ngành" class="lg:hidden">
          {{ student.Nganh }}
        </td>
        <td data-label="Số Vào Sổ">
          {{ student.SoVaoSo }}
        </td>
        <td data-label="GDQP">
          {{ student.GDQP }}
        </td>
        <td data-label="Thời gian nhận CC GDQP">
          {{ new Date(student.ThoiGianNhanGDQP).toLocaleString("vi") == 'Invalid Date' ? student.ThoiGianNhanGDQP : new
          Date(student.ThoiGianNhanGDQP).toLocaleString("vi")
          }}
        </td>
        <td data-label="Thiếu HS, HP" class="lg:hidden">
          {{ student.ThieuHSHP }}
        </td>
        <td data-label="Khảo sát" class="lg:hidden">
          {{ student.KhaoSat }}
        </td>
        <td data-label="Lễ Phục" class="lg:hidden">
          {{ student.LePhuc }}
        </td>
        <!-- <td data-label="Progress" class="lg:w-32">
          <progress
            class="flex w-2/5 self-center lg:w-full"
            max="100"
            :value="student.progress"
          >
            {{ student.progress }}
          </progress>
        </td> -->
        <!-- <td data-label="NgayTao" class="lg:w-1 whitespace-nowrap">
          <small class="text-gray-500 dark:text-slate-400" :title="student.NgayTao">{{ student.NgayTao }}</small>
        </td> -->
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <p v-if="student.NhanGDQP == 1">Đã nhận</p>
            <p v-else>Không nhận</p>
          </BaseButtons>

        </td>
      </tr>
    </tbody>
   <SkeletonTable v-if="isloading && numPages <= 0" />
  </table>
  <CardBox empty v-if="!isloading && numPages <= 0" />
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800 select-none">
    <BaseLevel>
      <BaseButtons>

        <BaseButton
          v-if="numPages > 0"
          :disabled="currentPage === 1"
          :icon="mdiChevronLeft"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = prevPage"
        />
        <BaseButton
          v-if="currentPage > 3"
          :active="currentPage == 1"
          :label="1"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = 1"
        />
        <span v-if="currentPage > 4">...</span>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = page"
        />
         <span v-if="currentPage < numPages - 3">...</span>
        <BaseButton
          v-if="currentPage < numPages - 2"
          :active="currentPage == numPages"
          :label="numPages"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = numPages"
        />
        <BaseButton
          v-if="numPages > 0"
          :disabled="currentPage === numPages"
          :icon="mdiChevronRight"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = nextPage"
        />

      </BaseButtons>
      <small v-if="numPages > 0">Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
    <!-- <Pagination /> -->
  </div>
</template>
