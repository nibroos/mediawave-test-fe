import Swal from 'sweetalert2'

const alertSuccess = (message?: string | null, title?: string | null) => {
  Swal.fire({
    title: title || 'Success',
    text: message || 'Successfully',
    showConfirmButton: true,
    icon: 'success',
    showCloseButton: true,
    timer: 2000
  })
}

const alertLoading = () => {
  Swal.fire({
    title: 'Loading',
    html: 'Please Wait',
    icon: 'warning',
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

const showPopupConfirmation = async (
  title?: string,
  text?: string,
  confirButtonText?: string,
  showCancelButton: boolean = true
) => {
  return Swal.fire({
    title: title || 'Are you sure want to delete this data?',
    text: text || 'You will no longer see this data.',
    icon: 'warning',
    showCancelButton: showCancelButton,
    confirmButtonColor: '#d33',
    confirmButtonText: confirButtonText || 'Ok',
    cancelButtonText: 'Cancel'
  }).then((result) => result.isConfirmed)
}

const alertSuccessConfirmation = () => {
  Swal.fire({
    title: 'Success',
    text: 'Successfully',
    showConfirmButton: true,
    icon: 'success'
  })
}

const alertLogoutConfirmation = () => {
  Swal.fire({
    title: 'Logout',
    text: 'Are you sure you want to log out?',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showCancelButton: true,
    confirmButtonText: 'Logout',
    icon: 'warning'
  }).then((result) => result.isConfirmed)
}

const alertError = (message?: string | null, opt?: any) => {
  Swal.fire({
    title: opt?.title || 'Error',
    html: message || 'Warning',
    showConfirmButton: opt?.showConfirmButton || true,
    confirmButtonColor: opt?.confirmButtonColor || '#0760ef',
    icon: opt?.icon || 'error'
  })
}

const alertWarning = () => {
  Swal.fire({
    title: 'Warning',
    html: 'warning!',
    showConfirmButton: true,
    confirmButtonColor: '#0760ef',
    icon: 'warning'
  })
}

const hideAlert = () => {
  Swal.close()
}

export const useAlert = {
  alertSuccess,
  alertSuccessConfirmation,
  alertLogoutConfirmation,
  alertError,
  alertWarning,
  hideAlert,
  showPopupConfirmation,
  alertLoading
}
